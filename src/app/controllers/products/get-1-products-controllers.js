const Products = require('../../models/products')
var ObjectID = require('mongodb').ObjectId
class Get1ProductsControllers {
    get1Products(req, res, next){
        const _id = req.body._id

        Products.findOne({
            "_id": ObjectID(_id)
        })
        .then(data => {
            res.json({
                data: data
            })
        })
        .catch(err => {
            res.json({
                err: err
            })
        })
    }
}

module.exports = new Get1ProductsControllers