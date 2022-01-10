const express = require('express')
const router = express.Router()

//controllers
const addCategoryControllers = require('../app/controllers/categogy/add-category-controllers')
const softDeleteControllers = require('../app/controllers/categogy/soft-delete-category-controllers')
const getAllCategoryControllers = require('../app/controllers/categogy/get-all-category-controllers')

//middlewares
const checkRoleControllers = require('../app/middlewares/check-role')

//route list
router.post('/add-category', checkRoleControllers.checkAdmin, addCategoryControllers.addCategory)

router.delete('/soft-delete-category', checkRoleControllers.checkAdmin, softDeleteControllers.softDeleteCategory)

router.get('/get-all-category', getAllCategoryControllers.getAllCategory)

module.exports = router