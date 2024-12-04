# VRV Security RBAC System

This project demonstrates an **Authentication**, **Authorization**, and **Role-Based Access Control (RBAC)** system.

## Features
- User registration and login.
- Role-based access to routes (Admin, Moderator, User).
- Secure JWT-based authentication.

## Installation
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Set up your `.env` file.
4. Run the server: `npm run dev`.

## Routes
- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Log in as a user.
- **GET /api/roles/admin**: Admin-only route.
- **GET /api/roles/moderator**: Moderator and Admin route.
- **GET /api/roles/user**: Accessible by all roles.
