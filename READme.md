# CLOTHESTORE

> A full-stack streetwear e-commerce platform built with React, TypeScript, Fastify, Prisma and PostgreSQL.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-CLOTHESTORE-black?style=for-the-badge)](https://clothestore-phi.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/pedrqca/CLOTHESTORE)

---

## About

CLOTHESTORE is a modern streetwear e-commerce project focused on combining a minimalist user interface with a real full-stack architecture.

The project started as a frontend experience and evolved into a client-server architecture, replacing mock product data with a REST API connected to a PostgreSQL database.

The main goal is to simulate the architecture and development process of a real-world e-commerce application while keeping the codebase organized, scalable and maintainable.

---

## Architecture

The application follows a client-server architecture:

```text
┌──────────────────────┐
│      React App       │
│  TypeScript + Vite   │
└──────────┬───────────┘
           │
           │ HTTP / REST
           ▼
┌──────────────────────┐
│     Fastify API      │
│      Node.js         │
└──────────┬───────────┘
           │
           │ Prisma ORM
           ▼
┌──────────────────────┐
│   PostgreSQL / Neon  │
└──────────────────────┘
```

The frontend is responsible for the user interface and communicates with the backend through HTTP requests.

The backend handles the API and database communication, while Prisma provides the database abstraction layer.

---

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- Lucide React

### Backend

- Node.js
- Fastify
- TypeScript
- REST API
- CORS

### Database

- PostgreSQL
- Prisma ORM
- Neon

### Development & Deployment

- Git
- GitHub
- pnpm
- Docker
- Vercel

---

## Features

### Current

- Responsive streetwear storefront
- Product listing
- Category filtering
- Product search
- Dynamic product data
- REST API
- PostgreSQL persistence
- Prisma ORM
- Frontend ↔ Backend integration
- Environment-based API configuration
- Production deployment
- CORS configuration
- Dockerized local PostgreSQL environment

### Planned

- Product details
- User authentication
- Persistent shopping cart
- Order management
- Checkout
- Payment integration
- Admin dashboard
- Product management
- Automated tests
- CI/CD pipeline
- Production monitoring

---

## Project Structure

```text
CLOTHESTORE/
│
├── clothestore-frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── types/
│   │   └── ...
│   └── ...
│
├── clothestore-backend/
│   ├── prisma/
│   │   ├── migrations/
│   │   ├── schema.prisma
│   │   └── seed.ts
│   │
│   ├── src/
│   │   ├── generated/
│   │   ├── lib/
│   │   ├── routes/
│   │   └── server.ts
│   │
│   └── ...
│
├── docker-compose.yml
├── package.json
├── pnpm-workspace.yaml
└── README.md
```

---

## API

The backend exposes a REST API used by the frontend.

### Health Check

```http
GET /health
```

Response:

```json
{
  "status": "ok"
}
```

### Products

```http
GET /products
```

Returns the products stored in PostgreSQL.

Example:

```json
[
  {
    "id": 1,
    "name": "Oversized Black T-Shirt",
    "price": 14990,
    "image": "black-tshirt.jpg",
    "isNew": true,
    "categorySlug": "t-shirts"
  }
]
```

---

## Database

The project uses PostgreSQL as its relational database.

Prisma is responsible for:

- Database schema definition
- Migrations
- Type-safe database access
- Prisma Client generation
- Database seeding

The current `Product` model contains:

```text
Product
├── id
├── name
├── price
├── image
├── isNew
├── categorySlug
└── createdAt
```

Product data is seeded into the database instead of being manually created through the frontend.

---

## Running Locally

### Requirements

Make sure you have installed:

- Node.js
- pnpm
- Docker

### 1. Clone the repository

```bash
git clone https://github.com/pedrqca/CLOTHESTORE.git

cd CLOTHESTORE
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start PostgreSQL

```bash
docker compose up -d
```

### 4. Configure environment variables

Create the required `.env` files based on the provided `.env.example` files.

The frontend requires:

```env
VITE_API_URL=http://localhost:3333
```

The backend requires PostgreSQL connection strings:

```env
DATABASE_URL=...
DIRECT_URL=...
```

### 5. Run database migrations

```bash
pnpm --filter clothestore-backend exec prisma migrate deploy
```

### 6. Seed the database

```bash
pnpm --filter clothestore-backend seed
```

### 7. Start the backend

```bash
pnpm --filter clothestore-backend dev
```

The API will be available at:

```text
http://localhost:3333
```

### 8. Start the frontend

```bash
pnpm --filter clothestore-frontend dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## Environment Variables

Environment variables are intentionally excluded from version control.

### Frontend

```env
VITE_API_URL=
```

### Backend

```env
DATABASE_URL=
DIRECT_URL=
FRONTEND_URL=
```

> Never commit real credentials, database URLs or API secrets.

---

## Deployment

The project is deployed using Vercel.

### Frontend

https://clothestore-phi.vercel.app/

### Backend

https://clothestore-backend-one.vercel.app/

The production frontend communicates with the deployed Fastify API, which retrieves product data from the PostgreSQL database hosted on Neon.

---

## Development Approach

The project is being developed incrementally, following a production-oriented approach.

The current architecture allows the frontend to consume real data from the backend without coupling the UI directly to the database.

This makes it possible to evolve the application independently across different layers:

```text
UI
 ↓
Frontend Services
 ↓
REST API
 ↓
Business Logic
 ↓
Prisma
 ↓
PostgreSQL
```

Future features will be added on top of this foundation.

---

## Roadmap

- [x] React storefront
- [x] Product categories
- [x] Fastify backend
- [x] REST API
- [x] PostgreSQL database
- [x] Prisma integration
- [x] Database migrations
- [x] Database seed
- [x] Frontend/API integration
- [x] Production deployment
- [ ] Product details
- [ ] Authentication
- [ ] Shopping cart
- [ ] Orders
- [ ] Checkout
- [ ] Payment integration
- [ ] Admin dashboard
- [ ] Automated tests
- [ ] CI/CD
- [ ] Monitoring

---

## Author

**Pedro Henrique**

Computer Engineering student focused on software development and full-stack applications.

- GitHub: [@pedrqca](https://github.com/pedrqca)
- LinkedIn: [Pedro Henrique](https://www.linkedin.com/in/pedrqca/)

---

## License

This project was created for educational and portfolio purposes.