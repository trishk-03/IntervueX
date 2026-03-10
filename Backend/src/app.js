const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check for Render
app.get('/', (req, res) => {
    res.json({ status: 'ok', message: 'IntervueX API is running' });
});

const authRouter = require('./route/auth.route');
const interviewRouter = require('./route/interview.route');
const database = require('./config/database');

//routes
app.use('/api/auth', authRouter);
app.use('/api/interview', interviewRouter);

module.exports = app;