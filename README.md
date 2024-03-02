# Real Estate Management Web Application

This project is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to list properties and manage them. Whether you're a real estate agent, property manager, or homeowner, this application provides a convenient way to organize and track properties.

## Features

- **Property Listing**: Users can view a list of available properties.
- **Property Details**: Each property displays essential details such as address, price, and description.
- **Add New Property**: Users can add new properties to the system.
- **Edit Property**: Update property details, including price, description, and other relevant information.
- **Delete Property**: *WIP*
- **User Authentication**: Secure user authentication using JWT (JSON Web Tokens).

## Technologies Used

- **Front End** (Folder: `frontend`):
  - React: Building the user interface.
  - React Router: Handling client-side routing.
  - Axios: Making API requests.
  - Styling: custom CSS
  - Default Port: 5173

- **Back End** (Folder: `backend`):
  - Node.js: Server-side logic.
  - Express: Creating RESTful APIs.
  - MongoDB: Storing property data.
  - Mongoose: Object Data Modeling (ODM) for MongoDB.
  - JWT: User authentication.
    - Default Port: *specified in .env file*

## Getting Started

1. **Clone the Repository**:
`https://github.com/ankitsmt211/real-estate.git`


2. **Install Dependencies**:
- frontend
    - cd frontend
    - cd real-estate
    - npm install
- backend
    - cd backend
    - npm install


3. **Set Up Environment Variables**:
- Create a `.env` file in the `backend` directory by copying `.sample-env` and populating the necessary values.

4. **Start the Development Servers**:
- frontend
    - cd frontend
    - cd real-estate
    - npm run dev

- backend
    - cd backend
    - npm start


5. **Access the Application**:
- Open your browser and navigate to http://localhost:5173.

