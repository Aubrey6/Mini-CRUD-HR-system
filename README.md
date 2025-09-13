# HR System - Run Guide

## Prerequisites
- Node.js + npm
- MySQL running locally

## Database Setup
- Ensure a database (e.g., `employeeSystem`) exists with an `employees` table
- Note your database connection details: host, port, user, and password

## Server Setup
1. Navigate to server directory:
   cd server

2. Install dependencies:
   npm install

3. Create a `.env` file in the server directory (recommended) with the following configuration:
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_USER=your_user
   DB_PASSWORD=your_password
   DB_NAME=employeeSystem
   PORT=3001

4. Start the server:
   node index.js

5. Server will run at http://localhost:3001

## Client Setup
1. Navigate to client directory:
   cd client

2. Install dependencies:
   npm install

3. Start the client application:
   npm start

4. Open http://localhost:3000 in your browser

## Notes
- Ensure MySQL service is running before starting the server
- Update the `.env` file with your actual database credentials
- The client application will automatically connect to the server on port 3001
