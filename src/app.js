const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/apiauth', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

// This is a new comment

// Routes
app.use('/users', require('./routes/users'));
// http://localhost:3333/users/signin

// Start the server
const port = process.env.APP_PORT || 3333;
app.listen(port);
console.log(`Server listening at ${port}`);
