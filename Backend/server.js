// backend/server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose'); // Import MongoDB connection
const app = express();
app.use(bodyParser.json());
app.use(cors());
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Task Management System API!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
