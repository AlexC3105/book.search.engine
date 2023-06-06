# MERN: Book Search Engine

## Description

This project is a book search engine built using the MERN (MongoDB, Express.js, React, Node.js) stack. The application allows users to search for books using the Google Books API and save their favorite books to their account.

The project is currently built with a RESTful API, and the task is to refactor it to use GraphQL with an Apollo Server. This will involve modifying the back-end code to implement GraphQL queries and mutations, updating the authentication middleware, and creating an Apollo Provider for communication with the Apollo Server.

The application should meet the following criteria:

- Users should be able to search for books and view search results.
- Users should be able to create an account, log in, and save books to their account.
- Users should be able to view their saved books and remove books from their account.
- The application should have a polished UI, be responsive, and provide an interactive user experience.
- Authentication should be implemented using JWT (JSON Web Tokens) to protect user data.
- Sensitive API key information should be securely stored on the server.
- The repository should follow quality coding standards, including a clean file structure, consistent naming conventions, proper indentation, and high-quality comments.
- The README file should provide a unique name, a description of the project, a list of technologies used, a screenshot of the application, and a link to the deployed application.

## User Story

As an avid reader, I want to search for new books to read so that I can keep a list of books to purchase.

## Acceptance Criteria

The following criteria should be met for the book search engine:

- When the search engine is loaded, the user should be presented with a menu containing the options to search for books and log in/sign up, as well as an input field and a submit button for searching books.
- When the user clicks on the "Search for Books" menu option, they should see an input field and a submit button for searching books.
- When the user is not logged in and enters a search term and clicks the submit button, they should be presented with several search results. Each result should display the book's title, author, description, image, and a link to the book on the Google Books site.
- When the user clicks on the "Log in/Sign up" menu option, a modal should appear with a toggle between the options to log in or sign up.
- When the toggle is set to "Sign up," the user should see inputs for a username, an email address, a password, and a signup button.
- When the toggle is set to "Login," the user should see inputs for an email address, a password, and a login button.
- When the user enters a valid email address, creates a password, and clicks the signup button, their user account should be created and they should be logged in to the site.
- When the user enters their account's email address and password and clicks the login button, the modal should close and they should be logged in to the site.
- When the user is logged in to the site, the menu options should change to "Search for Books," an option to view their saved books, and "Logout."
- When the user is logged in and enters a search term and clicks the submit button, they should be presented with several search results, similar to when they are not logged in. Additionally, there should be a button to save a book to their account for each search result.
- When the user clicks the "Save" button on a book, the book's information should be saved to their account.
- When the user clicks the option to view their saved books, they should be presented with all of the books they have saved to their account. Each saved book should display the book's title, author, description, image, a link to the book on the Google Books site, and a button to remove the book from their account.
- When the user clicks the "Remove" button on a book, the book should be deleted from their saved books list.
- When the user clicks the "Logout" button, they should be logged out of the site and presented with the menu, input field, and submit button as described in the first acceptance criterion.

## Mock-Up

The following mock-up demonstrates the appearance and functionality of the web application:

![Book Search Engine](./Assets/21-mern-homework-demo.gif)

## Technologies Used

The project uses the following technologies:

- Front-End: React
- Back-End: Node.js, Express.js, GraphQL, Apollo Server
- Database: MongoDB (with MongoDB Atlas for deployment)
- Authentication: JSON Web Tokens (JWT)
- Deployment: Heroku

## Installation and Usage

To run the book search engine locally, follow these steps:

1. Clone the repository from GitHub.
2. Navigate to the project directory.
3. Install the dependencies using `npm install`.
4. Set up the MongoDB database and configure the connection string.
5. Set up the necessary environment variables (e.g., JWT secret key, Google Books API key).
6. Run the application using `npm start`.
7. Access the application in your web browser at `http://localhost:3000`.

## Deployment

The application is deployed to Heroku with a MongoDB database using MongoDB Atlas. You can access the deployed application at --> !!! TO UPDATE LINK WHEN DEPLOYED !!! <-- .

## Repository

The project repository can be found at [GitHub Repository Link](https://github.com/AlexC3105/book.search.engine).

---

This project was developed as part of the curriculum for the [edX Bootcamps](https://bootcamps.edx.org) program. Confidential and proprietary information. All Rights Reserved.
