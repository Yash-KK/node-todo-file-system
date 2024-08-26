# Todo List API

This is a simple Todo List API built using Node.js and Express. It allows users to create, read, update, and delete todos stored in a `store.json` file.

## Features

- **Get Todos**: Retrieve the list of all todos.
- **Add Todo**: Add a new todo to the list.
- **Update Todo**: Update the description of an existing todo.
- **Delete Todo**: Delete a todo from the list.

## Technologies Used

- Node.js
- Express.js
- File System (`fs`) module

## Setup Instructions

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Yash-KK/node-todo-file-system.git
    cd node-todo-file-system
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Run the server**:

    ```bash
    node index.js
    ```

4. **Open Postman**:

    Use Postman to interact with the API endpoints listed below.

## API Endpoints

### 1. Get All Todos

- **URL**: `/`
- **Method**: `GET`
- **Description**: Fetches all the todos from `store.json`.
- **Response**:
  ```json
  [
    {
      "id": 1,
      "description": "Wake up"
    },
    {
      "id": 2,
      "description": "Brush your teeth"
    }
  ]

### 2. Add a New Todo

- **URL**: `/`
- **Method**: `POST`
- **Headers**: `Content-Type: application/json`
- **Body**:
    ```json
    {
      "description": "New Todo"
    }
    ```
- **Response**:
    ```json
    {
      "id": 3,
      "description": "New Todo"
    }
    ```

### 3. Update an Existing Todo

- **URL**: `/:id`
- **Method**: `PUT`
- **Headers**: `Content-Type: application/json`
- **Body**:
    ```json
    {
      "description": "Updated Todo"
    }
    ```
- **Response**:
    ```json
    {
      "id": 1,
      "description": "Updated Todo"
    }
    ```

### 4. Delete a Todo

- **URL**: `/:id`
- **Method**: `DELETE`
- **Description**: Deletes a todo with the specified ID.
- **Response**:
    ```json
    {
      "message": "Todo deleted successfully"
    }
    ```

### Testing the API with Postman

To test the API, you can use Postman by making requests to the above endpoints. Ensure your server is running locally on port 3000 (default).

