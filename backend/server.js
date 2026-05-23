require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // Import the DB connector

const app = express();

// Connect to Database
connectDB(); 

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Tall_Bridge Payment Server is active.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));