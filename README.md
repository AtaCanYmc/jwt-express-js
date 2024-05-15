# Express.js JWT Authentication Example

This example demonstrates a JWT (JSON Web Token) based authentication application using Express.js. This application creates a JWT during user login and uses this token to control access to protected routes.

## Technologies Used

- Node.js
- Express.js
- JSON Web Token (JWT)
- bcrypt (for hashing)
- MongoDB (as database)

## Getting Started

1. In the project directory, run the following command to install dependencies:

    ```
    npm install
    ```

2. Copy the `.env.example` file to create a new `.env` file and add your MongoDB connection URL and a secret key for JWT inside it.

3. Start your MongoDB connection:

    ```
    mongod
    ```

4. Start the application by running the following command:

    ```
    npm start
    ```

## Usage

- **User Signup**: You can create a new user by sending a POST request to the `/user` endpoint. You should send `username` and `password` fields in JSON format.

- **User Login**: You can log in as a user by sending a POST request to the `/auth/login` endpoint. Upon successful login, you will receive a JWT token.

## Environment Variables

You can use the following environment variables:

- `PORT`: The port number on which the application will run (default: 3000).
- `MONGODB_CONN`: MongoDB connection URL.
- `JWT_SECRET`: Secret key for JWT tokens.

## Contributing

If you have any feedback or would like to contribute to this project, feel free to submit a pull request to the GitHub repository.

