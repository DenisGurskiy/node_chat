const express = require('express');
const userController = require('../controllers/user.controller.js');
const { catchError } = require('../utils/catch.error.js');

const userRouter = express.Router();

// eslint-disable-next-line no-console
console.log('Second_step user');

userRouter.post('/login', catchError(userController.login));

userRouter.post('/logout', catchError(userController.logout));

module.exports = {
  userRouter,
};
