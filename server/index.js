const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Employee = require('./models/Employee');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {});

app.post('/register', (req, res) => {
    Employee.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.status(400).json(err));
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

