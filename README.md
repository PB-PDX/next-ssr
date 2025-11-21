# Next Full-Stack Learning Project

A Next.js application built to understand modern full-stack TypeScript patterns with tRPC, Prisma, and mixed SSR/CSR architecture.

## Overview

This project demonstrates:
- **Server-Side Rendering** with Next.js App Router
- **Client-Side Rendering** for interactive components
- **End-to-end type safety** with tRPC
- **Database management** with Prisma migrations
- **Modern React patterns** (Server Components + Client Components)

## Features

- User creation form with real-time validation
- Mixed SSR/CSR page demonstrating both patterns
- Type-safe API layer with tRPC
- PostgreSQL database with Prisma ORM
- Docker setup for local development

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **API Layer**: tRPC with TanStack Query
- **Database**: Prisma + PostgreSQL
- **Styling**: Tailwind CSS

## Getting Started
```bash
# Install dependencies
npm install

# Start PostgreSQL
docker-compose up -d

# Setup database
npx prisma db push

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the application.

## Architecture Highlights

- **Server Components** for initial data loading and SEO
- **Client Components** for forms and interactivity
- **tRPC** for type-safe client-server communication
- **Prisma migrations** for database schema management

Built while studying modern full-stack TypeScript patterns.