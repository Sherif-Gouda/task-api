
# Task API

The Task API is a simple RESTful API built with Node.js and Express for managing tasks. It provides basic CRUD operations (Create, Read, Update, Delete) for tasks. You can use this API to create, read, update, and delete tasks, as well as search for tasks using specific keywords.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Create a New Task](#create-a-new-task)
  - [Read All Tasks](#read-all-tasks)
  - [Search for Tasks](#search-for-tasks)
  - [Update a Task](#update-a-task)
  - [Delete a Task](#delete-a-task)
- [API Endpoints](#api-endpoints)

## Features

- Create a new task with a title and description.
- Read all tasks.
- Search for tasks using keywords in titles or descriptions.
- Update an existing task.
- Delete a task by its ID.

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager) should be installed on your system.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sherif-Gouda/task-api.git


2.  Navigate to the project directory:
    
    ```bash
    
    cd task-api
    
3.  Install dependencies:
    
    ```bash
    
	 npm install
    
4.  Start the server:
    
    ```bash
    
    npm start 
    

The server will run on port 3001 by default. You can access the API at `http://localhost:3001`.

## Usage

### Create a New Task

-   **URL**: `/tasks`
-   **Method**: `POST`
-   **Request Body**: JSON object with `title` and `description`.
-   **Response**: The newly created task object.

### Read All Tasks

-   **URL**: `/tasks`
-   **Method**: `GET`
-   **Response**: An array of all tasks.

### Search for Tasks

-   **URL**: `/tasks/:key`
-   **Method**: `GET`
-   **URL Parameter**: `key` (case-insensitive search keyword).
-   **Response**: An array of tasks containing the keyword in their titles or descriptions.

### Update a Task

-   **URL**: `/tasks/:id`
-   **Method**: `PUT`
-   **URL Parameter**: `id` (ID of the task to update).
-   **Request Body**: JSON object with `title` and `description`.
-   **Response**: The updated task object.

### Delete a Task

-   **URL**: `/tasks/:id`
-   **Method**: `DELETE`
-   **URL Parameter**: `id` (ID of the task to delete).
-   **Response**: The deleted task object.

## API Endpoints

-   `POST /tasks` - Create a new task.
-   `GET /tasks` - Read all tasks.
-   `GET /tasks/:key` - Search for tasks.
-   `PUT /tasks/:id` - Update a task by ID.
-   `DELETE /tasks/:id` - Delete a task by ID.
