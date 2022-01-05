const express = require('express')
const router = express.Router()

//controllers
const getProductsControllers = require('../app/controllers/products/get-products-controllers')
const getQuantityProductsControllers = require('../app/controllers/products/get-quantity-products-controllers')
//middlewares
const checkRoleControllers = require('../app/middlewares/check-role')

//route list
router.get('/get-products', getProductsControllers.getProducts)
router.get('/get-quantity-products', getQuantityProductsControllers.getQuantityProducts)


module.exports = router