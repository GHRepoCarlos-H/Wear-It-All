//api folder server.js file
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// middleware

app.use(express.json());
app.use(cors());

app.options('/items/new', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://wear-it-all-api.onrender.com/');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.sendStatus(200);
});

// CONTROLLERS
const itemsController = require('./controllers/items_controllers');
app.use('/items', itemsController);
app.use('/items/new', itemsController);

const port = process.env.PORT || 3000; // Use PORT variable from .env file, or default to 3000
const url = process.env.URL || `http://localhost:${port}`; // Use URL variable from .env file, or default to http://localhost:PORT

app.listen(port, () => {
    console.log(`Server is listening at ${url}`);
});
