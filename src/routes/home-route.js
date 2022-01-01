const express = require('express')
const router = express.Router()

const homeControllers = require('../app/controllers/home-controllers')

router.get('/', homeControllers.index)

module.exports = router