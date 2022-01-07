const Products = require('../../models/products')
var xss = require("xss")

class AddProductsControllers {
    addProducts(req, res, next){

        // get and sanitizing HTML
        var name = xss(req.body.name)
        var price = xss(req.body.price)
        var quantity = xss(req.body.quantity)
        var img = xss(req.body.img)
        var video = xss(req.body.video)
        var category = xss(req.body.category)
        var trademark = xss(req.body.trademark)
        var sold = xss(req.body.sold)
        var size = xss(req.body.size)
        var discount = xss(req.body.discount)
        var color = xss(req.body.color)
        var description = xss(req.body.description)
        
        if(!sold){
            sold = 0
        }
        if(!discount){
            discount = 0
        }

        Products.create({
            name: name,
            price: price,
            quantity: quantity,
            img: img,
            video: video,
            category: category,
            trademark: trademark,
            sold: sold,
            size: size,
            discount: discount,
            color: color,
            description: description
        })
        .then(data => {
            console.log(data)
            res.json({
                data: data
            })
        })
        .catch(err => {
            console.log(err)
            res.json({
                err: err
            })
        })
    }
}

module.exports = new AddProductsControllers