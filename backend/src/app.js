import 'dotenv/config';

import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

if (process.env.NODE_ENV === 'test') {
  mongoose.connect('mongodb://localhost/apiauthTEST', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} else {
  mongoose.connect('mongodb://localhost/apiauth', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

const app = express();

// Middlewares
if (!process.env.NODE_ENV === 'test') {
  app.use(morgan('dev'));
}
app.use(bodyParser.json());

// This is a new comment

// Routes
app.use('/users', require('./routes/users'));
// http://localhost:3333/users/signin

module.exports = app;
