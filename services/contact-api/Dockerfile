FROM node:20-alpine

WORKDIR /app

COPY services/contact-api/server.js ./server.js

ENV NODE_ENV=production
ENV PORT=8787

EXPOSE 8787

CMD ["node", "server.js"]
