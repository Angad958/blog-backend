# Blog Backend

This project is the backend for a personal blog platform where users can sign up, log in, and post articles. The backend is built using Node.js and Express.

## Setup Instructions

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Angad958/blog-backend.git
   cd blog-backend
2. Install the dependencies:
    ```bash
   npm install
3. For the convenience purpose config file is provided no need to add .env
4. Start the application:<br>
  a. Using nodemon:

    ```bash
   using nodemon: npm run dev
   using node: npm run test

 ### Project Structure

```
blog-backend/
  config/
    config.json
  controllers/
    auth.controller.js
    post.controller.js
  middleware/
    auth.js
    rate-limiter.js
  models/
    User.js
    Post.js
  routes/
    auth.js
    posts.js
  store/
    db.js
  utils/
    authUtils.js
    logger.js
    responseHandlers.js
  .gitignore
  app.js
  package.json
  README.md
  server.js
```
### Explanation of Project Directories

* **config/**: Contains configuration files, such as the `config.json` for environment-specific settings.
* **controllers/**: Contains the controllers that handle the business logic for each route. For example, `auth.controller.js` handles authentication-related logic, and `post.controller.js` handles blog post-related logic.
* **middleware/**: Contains middleware functions, such as `auth.js` for protecting routes and `rate-limiter.js` for rate limiting.
* **models/**: Contains Mongoose models for MongoDB collections. For example, `User.js` defines the user schema, and `Post.js` defines the post schema.
* **routes/**: Contains the route definitions for authentication and blog posts.
* **store/**: Contains the database connection logic, such as `db.js`.
* **utils/**: Contains utility functions, such as `authUtils.js` for authentication-related utilities, `logger.js` for logging, and `responseHandlers.js` for standardized response handling.
* **app.js**: Initializes the application.

### Development Choices
#### Technology Stack

* **Node.js and Express**: Chosen for their simplicity and flexibility in building RESTful APIs.
* **MongoDB**: Chosen as the database for its scalability and ease of use with Mongoose ODM.
* **JWT for Authentication**: JSON Web Tokens (JWT) are used for secure and stateless authentication.
* **Rate Limiting**: Implemented to protect the API from abuse and ensure fair usage.

API Endpoints
============

### Authentication

* **POST /signup**: Registers a new user with email and password.
* **POST /login**: Authenticates a user and returns a session token.

### Posts

* **POST /posts**: Allows authenticated users to post a new article.
* **GET /posts**: Retrieves all posts.
* **GET /posts?author=userId**: Retrieves posts by a specific author.

License
=======

This project is licensed under the **MIT License**.
