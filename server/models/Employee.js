const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;