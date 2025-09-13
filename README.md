HR System — Run Guide
Prerequisites

Node.js + npm
MySQL running locally
Database

Ensure a database (e.g., employeeSystem) exists with an employees table.
Note your DB host, port, user, and password.
Server

cd server
npm install
(Recommended) Create server/.env:
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=employeeSystem
PORT=3001
Start: node index.js
Server runs at http://localhost:3001
Client

cd client
npm install
npm start
Open http://localhost:3000 in your browser
