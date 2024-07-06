# Task-dashboard

Task Manager is a web application designed to help users manage their tasks efficiently. It allows users to add, edit, and delete tasks based on priority and due dates.

Task Manager is hosted at https://taskmanager9946.netlify.app/. This README.md provides instructions on how to run the application locally for development purposes.

# Features

Add New Task: Add tasks with a title, description, priority, and due date.

Edit Task: Modify existing tasks, updating details such as title, description, and priority.

Delete Task: Remove tasks that are no longer needed.

Responsive Design: Works seamlessly on desktop and mobile devices.

# Technologies Used

Frontend: React, HTML, CSS

Backend: Node.js, Express.js, MongoDB

Deployment: Netlify (Frontend), Render.com (Backend)

# Installation

To run this project locally, follow these steps:

## Prerequisites

Node.js installed on your local environment

MongoDB installed and running locally (or you can use a MongoDB Atlas cluster)

## 1. Clone the Repository

git clone https://github.com/anshika9946/Task-dashboard.git

cd Task-dashboard

## 2. Set Up Backend (Node.js + Express.js + MongoDB)

Navigate to the backend directory:

cd backend

Install dependencies:

npm install

Set up environment variables:

Create a .env file in the backend directory.

Add MongoDB connection URI to .env file:

MONGODB_URI=your_mongodb_connection_uri

Start the backend server:

npm start

The backend server will start running at http://localhost:3001.

## 3. Set Up Frontend (React)

Open a new terminal window/tab.

Navigate to the frontend directory:

cd ../frontend

Install dependencies:

npm install

Start the frontend server:

npm start

The frontend development server will start running at http://localhost:3000.

# Usage

Open your web browser and navigate to http://localhost:3000.

Use the application to add, edit, and delete tasks.
