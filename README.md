# Node.js API Training

This is a simple **Node.js REST API** for managing products using **Express.js** and **MongoDB**. It allows users to perform CRUD operations (Create, Read, Update, Delete) on products.

## Features
- **Create** a new product
- **Retrieve** all products
- **Retrieve** a specific product by ID
- **Update** a product by ID
- **Delete** a product by ID

## Technologies Used
- **Node.js** - Backend runtime
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/pradeish29/node-training.git
   ```
2. Navigate into the project directory:
   ```sh
   cd node-training
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```env
   MONGO_URI=mongodb+srv://your_username:your_password@cluster0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   ```
5. Start the server:
   ```sh
   npm start
   ```
   The server will run on `http://localhost:3000`

## API Endpoints
| Method | Endpoint           | Description |
|--------|-------------------|-------------|
| GET    | `/api/products`    | Get all products |
| GET    | `/api/products/:id`| Get a product by ID |
| POST   | `/api/products`    | Create a new product |
| PUT    | `/api/products/:id`| Update a product by ID |
| DELETE | `/api/products/:id`| Delete a product by ID |

## Example Request (POST a Product)
**Endpoint:** `POST /api/products`

**Request Body:**
```json
{
    "name": "Chocolate",
    "quantity": 2,
    "price": 20
}
```

## Running in Development Mode
For development, use **nodemon** to automatically restart the server when files change:
```sh
npm install -g nodemon
nodemon index.js
```

## Contributing
Feel free to fork this repository and submit pull requests with improvements!

## License
This project is licensed under the MIT License.

