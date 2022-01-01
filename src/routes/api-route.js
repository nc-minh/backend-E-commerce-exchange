const express = require('express')
const router = express.Router()

const registerControllers = require('../app/controllers/register-controllers')

router.post('/register', registerControllers.register)

module.exports = router