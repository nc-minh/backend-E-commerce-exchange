const express = require('express')
const router = express.Router()

//controllers
const getProductsControllers = require('../app/controllers/products/get-products-controllers')
const getQuantityProductsControllers = require('../app/controllers/products/get-quantity-products-controllers')
const addProductsControllers = require('../app/controllers/products/add-products-controllers')
const updateProductsControllers = require('../app/controllers/products/update-products-controllers')
const get1ProductsControllers = require('../app/controllers/products/get-1-products-controllers')
//middlewares
const checkRoleControllers = require('../app/middlewares/check-role')

//route list
router.get('/get-all-products', getProductsControllers.getProducts)

router.get('/get-1-products', get1ProductsControllers.get1Products)

router.post('/add-products', checkRoleControllers.checkAdmin, addProductsControllers.addProducts)

router.patch('/update-products', checkRoleControllers.checkAdmin, updateProductsControllers.updateProducts)

router.get('/get-quantity-products', getQuantityProductsControllers.getQuantityProducts)



module.exports = router