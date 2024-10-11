const express = require('express');
const { check } = require('express-validator');
const { signup, login } = require('./controllers');
const router = express.Router();

// The user sign up
router.post('/user/signup', [
    check('username', 'Username is required').not().isEmpty(),
    check('email', 'Please provide a valid email').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
], signup);

// Uthe user login portal
router.post('/user/login', [
    check('email', 'Please provide a valid email').isEmail(),
    check('password', 'Password is required').exists(),
], login);

module.exports = router;

const { getEmployees, addEmployee, getEmployeeById, updateEmployee, deleteEmployee } = require('./controllers');

// The employee routes
router.get('/emp/employees', getEmployees);
router.post('/emp/employees', addEmployee);
router.get('/emp/employees/:eid', getEmployeeById);
router.put('/emp/employees/:eid', updateEmployee);
router.delete('/emp/employees', deleteEmployee)
