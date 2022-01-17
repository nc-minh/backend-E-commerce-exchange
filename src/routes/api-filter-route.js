const express = require('express')
const router = express.Router()

//controllers
const filterCategoryControllers = require('../app/controllers/filter/filter-category-controllers')
//middlewares
const checkRoleControllers = require('../app/middlewares/check-role')

//route list
router.get('/', filterCategoryControllers.filterCategoryControllers)

module.exports = router