# Qualibytes Tech Education Platform

## Overview

This is a full-stack web application for Qualibytes, a technology education platform that offers various programming and tech skill courses. The application is built with a modern React frontend, Express.js backend, and PostgreSQL database, designed to showcase programs, collect leads, and display success stories.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React with TypeScript, using Vite for development and building
- **Backend**: Express.js with TypeScript running on Node.js
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **Component-based React application** with TypeScript for type safety
- **Shadcn/ui design system** providing consistent, accessible UI components
- **TanStack Query** for efficient server state management and caching
- **Wouter routing** for lightweight client-side navigation
- **Form handling** with React Hook Form and Zod validation
- **Responsive design** with Tailwind CSS and mobile-first approach

### Backend Architecture
- **Express.js RESTful API** with TypeScript for type safety
- **Modular route structure** with separate storage layer abstraction
- **Memory storage implementation** for development with interface for future database integration
- **Middleware-based request/response handling** with logging and error management
- **Static file serving** with Vite integration for development

### Database Schema
The application uses Drizzle ORM with PostgreSQL and includes these main entities:
- **Users**: Authentication and user management
- **Programs**: Course offerings with type (online/on-campus), duration, and features
- **Testimonials**: Industry and student feedback with categorization
- **Success Stories**: Alumni career progression with salary information
- **Team Members**: Leadership and advisory committee profiles
- **Leads**: Customer inquiry management system

## Data Flow

1. **Client requests** are handled by the React frontend using TanStack Query
2. **API calls** are made to Express.js backend endpoints under `/api/*`
3. **Data persistence** currently uses in-memory storage with interface for database integration
4. **Response data** is cached and managed by TanStack Query on the frontend
5. **Form submissions** are validated client-side with Zod schemas and processed server-side

## External Dependencies

### Development Tools
- **Vite**: Fast development server and build tool
- **TypeScript**: Type safety across the entire application
- **ESBuild**: Fast JavaScript bundling for production
- **Drizzle Kit**: Database schema management and migrations

### UI/UX Libraries
- **Radix UI**: Accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe variant styling

### Backend Dependencies
- **Neon Database**: Serverless PostgreSQL provider
- **Connect PG Simple**: PostgreSQL session store for Express
- **Date-fns**: Date manipulation and formatting

## Deployment Strategy

The application is configured for deployment follow setup:

### Development Environment
- **Node.js 20** runtime environment
- **PostgreSQL 16** database server
- **Hot reload** development server on port 5000
- **Vite dev server** with HMR for fast development

### Production Build
- **Vite build** for optimized frontend bundle
- **ESBuild** for server-side code bundling
- **Static file serving** from Express.js server
- **PostgreSQL** connection via DATABASE_URL environment variable

### Configuration
- **Autoscale deployment** target for production
- **Port 5000** exposed as port 80 externally
- **Parallel workflow** execution for development
- **Database provisioning** with PostgreSQL module

## Changelog

```
Changelog:
- June 26, 2025. Initial setup
- June 26, 2025. Added complete Scaler website replica with Qualibytes branding
  - Functional navigation with dropdown menus
  - Hero section with video placeholder and registration form
  - Premium dark theme as default with light/dark toggle
  - Marquee effect for company logos section
  - Floating WhatsApp button for customer support
  - Responsive design with mobile-first approach
  - Complete API integration for all data sections
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```