const express = require('express')
const router = express.Router()

//controllers
const registerControllers = require('../app/controllers/register-controllers')
const loginControllers = require('../app/controllers/login-controllers')
//middlewares
const checkRoleControllers = require('../app/middlewares/check-role')

router.post('/register', registerControllers.register)

router.post('/login', loginControllers.login)


module.exports = router