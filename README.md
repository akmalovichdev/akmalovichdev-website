# akmalovich.dev - Portfolio

A modern, responsive portfolio website for Nurbekjon Akhmatov (akmalovich.dev) - DevOps & Backend Developer.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Docker (optional)

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Docker

```bash
# Build Docker image
docker build -t akmalovich-portfolio .

# Run container
docker run -p 3000:80 akmalovich-portfolio

# Or use docker-compose
docker-compose up -d
```

## 📁 Project Structure

```
├── packages/
│   └── web/                 # React frontend
│       ├── src/
│       │   ├── components/  # React components
│       │   ├── hooks/       # Custom hooks
│       │   ├── lib/         # Utilities & constants
│       │   └── styles/      # Global styles
│       └── public/          # Static assets
├── .github/
│   └── workflows/           # CI/CD pipelines
├── Dockerfile
├── docker-compose.yml
└── nginx.conf
```

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Docker, Nginx

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Nurbekjon Akhmatov** - [@akmalovichdev](https://github.com/akmalovichdev)
