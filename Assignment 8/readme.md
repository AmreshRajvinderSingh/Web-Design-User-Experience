# Node, Mongo, and Express - User Management APIs

This project focuses on building user management APIs using Node.js, MongoDB, and Express. The APIs are designed to handle user creation, update, deletion, and retrieval operations.

## User Creation API

### API Endpoint:

**POST: /user/create**

- Create a new user with parameters: full name, email, and password.

#### Strong Password Rule:

- Enforce a strong password rule.

#### Email and Full Name Validation:

- Add validation for email and full name.
- Provide a meaningful message if the user email or password is invalid.

## User Update API

### API Endpoint:

**PUT: /user/edit**

- Update the user details (full name and password only).
- Email should not get updated at any point.

#### Validation:

- Add validations for full name and password.
- Throw a proper error message if a user is not in the database.

## User Deletion API

### API Endpoint:

**DELETE: /user/delete**

- Delete the user by taking the user's email as input.

## Get All Users API

### API Endpoint:

**GET: /user/getAll**

- Retrieve all user's full name, email addresses, and passwords stored in the database.

## Security

- Passwords are securely stored using bcrypt for enhanced security.

## How to Run

1. Install dependencies: `npm install`
2. Start the server: `npm start`
3. Use Postman or similar tools to test the APIs.

## Note

- This project does not include a user interface; APIs can be tested using Postman.

Feel free to explore and extend the functionalities of the APIs!
