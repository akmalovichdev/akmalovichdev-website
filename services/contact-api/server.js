const http = require('node:http');

const PORT = Number(process.env.PORT || 8787);
const TELEGRAM_BOT_TOKEN =
  process.env.TELEGRAM_BOT_TOKEN || process.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID =
  process.env.TELEGRAM_CHAT_ID || process.env.VITE_TELEGRAM_CHAT_ID;
const MAX_BODY_BYTES = 16 * 1024;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const requestLog = new Map();

function sendJson(res, statusCode, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  res.end(body);
}

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim();
  }
  return req.socket.remoteAddress || 'unknown';
}

function isRateLimited(ip) {
  const now = Date.now();
  const hits = requestLog.get(ip) || [];
  const freshHits = hits.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
  if (freshHits.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(ip, freshHits);
    return true;
  }
  freshHits.push(now);
  requestLog.set(ip, freshHits);
  return false;
}

function sanitize(value) {
  return String(value || '').trim();
}

function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
      if (Buffer.byteLength(raw, 'utf8') > MAX_BODY_BYTES) {
        reject(new Error('Request body is too large'));
        req.destroy();
      }
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(raw || '{}'));
      } catch {
        reject(new Error('Invalid JSON body'));
      }
    });
    req.on('error', (error) => reject(error));
  });
}

async function sendToTelegram({ name, email, message }) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    throw new Error('Telegram is not configured on the server');
  }

  const text = [
    'New message from akmalovich.dev',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    '',
    'Message:',
    message,
  ].join('\n');

  const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text,
    }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok || data.ok !== true) {
    const description =
      typeof data.description === 'string'
        ? data.description
        : 'Telegram API request failed';
    throw new Error(description);
  }
}

const server = http.createServer(async (req, res) => {
  if (!req.url) {
    sendJson(res, 400, { ok: false, error: 'Bad request' });
    return;
  }

  if (req.method === 'GET' && req.url === '/health') {
    sendJson(res, 200, { ok: true, status: 'healthy' });
    return;
  }

  if (req.method === 'POST' && req.url === '/api/contact') {
    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      sendJson(res, 429, { ok: false, error: 'Too many requests. Please try again later.' });
      return;
    }

    try {
      const body = await parseJsonBody(req);
      const name = sanitize(body.name);
      const email = sanitize(body.email);
      const message = sanitize(body.message);

      if (name.length < 2 || name.length > 120) {
        sendJson(res, 400, { ok: false, error: 'Name must be between 2 and 120 characters.' });
        return;
      }
      if (email.length < 5 || email.length > 254 || !email.includes('@')) {
        sendJson(res, 400, { ok: false, error: 'Please provide a valid email address.' });
        return;
      }
      if (message.length < 5 || message.length > 5000) {
        sendJson(res, 400, { ok: false, error: 'Message must be between 5 and 5000 characters.' });
        return;
      }

      await sendToTelegram({ name, email, message });
      sendJson(res, 200, { ok: true });
      return;
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Unknown server error';
      sendJson(res, 500, { ok: false, error: `Failed to send message: ${message}` });
      return;
    }
  }

  sendJson(res, 404, { ok: false, error: 'Not found' });
});

server.listen(PORT, () => {
  console.log(`contact-api listening on port ${PORT}`);
});
