const express = require('express')
const router = express.Router()

//controllers
const searchControllers = require('../app/controllers/search/search-controllers')
//middlewares
const checkRoleControllers = require('../app/middlewares/check-role')

//route list
router.post('/', searchControllers.search)

module.exports = router