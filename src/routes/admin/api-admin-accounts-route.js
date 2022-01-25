const express = require('express')
const router = express.Router()

//controllers
const getAllUserControllers = require('../../app/controllers/admin/get/get-all-user-controllers')

//middlewares
const checkRoleControllers = require('../../app/middlewares/check-role')

//route list
router.get('/get-all-user', checkRoleControllers.checkAdmin, getAllUserControllers.getAllUser)

module.exports = router