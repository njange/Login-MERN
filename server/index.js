const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Employee = require('./models/Employee');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/employee")
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


app.post('/login', (req, res) => {
  const { email, password } = req.body;
  Employee.findOne({ email: email})
  .then(user => {
    if(user) {
      if(user.password === password) {
        res.json('Login Success');
      } else {
        res.json('Password does not match');
      }
    } else {
      res.json('User not registered');
    }
  })
  })


app.post('/register', (req, res) => {
    Employee.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err));
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

