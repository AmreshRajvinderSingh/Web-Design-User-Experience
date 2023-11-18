# Assignment9 - React and Node.js Web Application

## Description
Assignment9 is a web application developed as part of a course project. It features a React frontend with a Node.js backend, showcasing dynamic web pages, user authentication, and interactive content.

## Features
- User Authentication: Secure login functionality.
- Personalized Greeting: Users are greeted with their names upon login.
- Dynamic Job Listings: The Jobs page dynamically renders job listings.
- Interactive Pages: Includes Home, About, Jobs, and Contact pages.

## Installation
To set up the project locally:

1. **Clone the Repository**
git clone https://github.com/AmreshRajvinderSingh/Web-Design-User-Experience/tree/main/Assignment%209


2. **Install Dependencies**
Navigate to the project directory:
cd Assignment9 npm install

3. **Start the Application**
Run the application:
npm start

4. **Start the Frontend Application**


## Usage
Access the application at `http://localhost:3000`. Log in to view personalized content.

## Technology Stack
- **Frontend**: React, React Router, Bootstrap
- **Backend**: Node.js, Express, MongoDB

## Contributing
Contributions are welcome. Please adhere to this project's `code of conduct`.

## License
Not under any specific license.


## Workflow
-  Index.js:
This file is the entry point of your React application.
It imports necessary dependencies such as React, ReactDOM, and stylesheets.
ReactDOM.createRoot is used to create a root for rendering React elements.
It renders the App component wrapped in React.StrictMode. StrictMode helps catch common mistakes and ensures that your components follow best practices.
-  App.js:
This is the main component that represents your entire React application.
It uses the BrowserRouter from react-router-dom to enable routing.
The Routes component is used to define different routes and their corresponding components.
Layout is a common layout for all routes, and different components (Home, About, Jobs, Contact, LoginPage) are rendered based on the route.
-  Layout.js:
This component represents the layout structure that remains consistent across different pages.
It includes a Navbar from react-bootstrap for navigation and an Outlet to render nested components based on the current route.
-  Components:
Home.js: Displays a welcome message. It uses the useUser hook from UserContext to dynamically show the user's full name if available.
About.js, Jobs.js, Contact.js: These components are simple and display information related to their respective topics.
LoginPage.js: Represents a login page. It seems to be part of an authentication system.
-  Card.js:
A reusable component used across different sections (Home, About, Jobs, Contact) to display information in a card format. It takes title and content as props.
- UserContext.js:
This file sets up a context using createContext from React.
It provides a UserProvider component to wrap the application with, making user-related data available to all components using the useUser hook.
-  Styling:
CSS files (index.css, About.css, Contact.css, Home.css, Jobs.css) are used for styling the respective components.
-  reportWebVitals.js:
This file includes a function (reportWebVitals) that can be used to measure the performance of your application. It can log the results to the console or send them to an analytics endpoint.
- Packages:
You are using Bootstrap for styling, and react-bootstrap for React components styled with Bootstrap.
-  Jobs.js:
This component displays information about job opportunities.
It uses a list of job objects to render individual job cards using the Card component.
- Summary:
Your project is structured as a single-page application using React. It includes routing for different sections, a common layout, and reusable components. The use of context (UserContext) indicates the inclusion of user-related data management. Bootstrap is used for styling, providing a clean and consistent look to your application. The project seems to be a front-end application, with components organized for easy maintenance and readability.
