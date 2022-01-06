const Products = require('../../models/products')
class AddProductsControllers {
    addProducts(req, res, next){
        res.send('ok')
    }
}

module.exports = new AddProductsControllers