require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route');

const app = express();
app.use(express.json());

app.use('/api/products', productRoute.productRoute);

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB Successfully');
  })
  .catch((err) => {
    console.log('Connection Failed', err);
  });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
