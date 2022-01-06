const Products = require('../../models/products')
class AddProductsControllers {
    addProducts(req, res, next){
        const name = req.body.name
        const price = req.body.price
        const quantity = req.body.quantity
        const img = req.body.img
        const video = req.body.video
        const category = req.body.category
        const trademark = req.body.trademark
        const sold = req.body.sold
        const size = req.body.size
        const discount = req.discount
        const color = req.body.color
        const description = req.body.description

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