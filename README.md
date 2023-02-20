# Secure express server with login system

## Features
- User registration with hashed passwords
- User login with hashed password verification
- Basic CRUD functionality for user accounts (Create, Read, Update, Delete)
- Validation for required fields and password matching
- Error handling and responses for various scenarios

# Dependencies
This project uses the following dependencies:

- Express
- Mongoose
- Bcryptjs
- Dotenv
- UUID

# Installation
1. Clone this repository using git clone https://github.com/Tariq-Monowar/Secure-express-server-with-login-system 
2. Navigate to the project directory using cd Secure-express-server-with-login-system.
3. Install the dependencies using npm install.
4. Create a .env file in the root directory of the project
5. Start the server using npm start

# API Routes
- GET /api/users - Get all users
- POST /api/users - Create a new user
- GET /api/users/:id - Get a user by ID
- PATCH /api/users/:id - Update a user by ID
- DELETE /api/users/:id - Delete a user by ID
- POST /api/users/login - Login a user



