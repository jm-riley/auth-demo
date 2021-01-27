const express = require('express');
const csrf = require('csurf');
const { User } = require('../db/models');
const router = express.Router();

const csrfProtection = csrf({ cookie: true });
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

// 1. GET route that renders a register form

// 2. POST route to register a new user

// 3. GET route that renders a login form

// 4. POST route to handle user login
module.exports = router;
