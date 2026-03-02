const { Router } = require('express');

const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.middlewares');
const authRouter = Router();
/** 
*@route  Post/api/auth/register
*@desc   Register a new user
*@access Public
**/
authRouter.post('/register', authController.register);

/** 
*@route  Post/api/auth/login
*@desc   Login user and return token
*@access Public
**/
authRouter.post('/login', authController.login);

/** 
*@route  Get/api/auth/logout
*@desc   Logout user and blacklist the token
*@access Public
**/

authRouter.get('/logout', authMiddleware, authController.logout);

/**
 *@route  Get /api/auth/get-me
 * @desc   Get user details of logged in user
 * @access Protected 
**/

authRouter.get('/get-me', authMiddleware, authController.getMe);

module.exports = authRouter;