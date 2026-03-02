const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

const authRouter = require('./route/auth.route');
const database = require('./config/database'); 

//routes
app.use('/api/auth',authRouter);

module.exports = app;