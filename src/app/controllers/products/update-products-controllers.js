const Products = require('../../models/products')
var xss = require("xss")
var ObjectID = require('mongodb').ObjectId

class UpdateProductsControllers {
    updateProducts(req, res, next) {
        // get and sanitizing data
        var name = req.body.name || ' '
        var price = req.body.price || 0
        var quantity = req.body.quantity || 0
        var img = req.body.img || []
        var video = req.body.video || []
        var category = req.body.category || ' '
        var trademark = req.body.trademark || ' '
        var sold = req.body.sold || 0
        var size = req.body.size || []
        var discount = req.body.discount || 0
        var color = req.body.color || []
        var description = req.body.description || ' '

        

        const _id = req.body._id
        console.log(price)
        console.log(color)
        console.log(trademark)

        console.log(name)
        console.log(xss(name))

        if (name != xss(name) || price != xss(price) || quantity != xss(quantity) || img != xss(img) || video != xss(video) || category != xss(category) || trademark != xss(trademark) || sold != xss(sold) || size != xss(size) || discount != xss(discount) || color != xss(color) || description != xss(description)) {
            res.json({
                message: 'Ôi bạn ơi xss cc à :))',
                status: 'error'
            })
        } else {
            
            Products.updateOne({
                    "_id": ObjectID(_id)
                }, {
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
                    description: description,
                    color: color
                })
                .then(data => {
                    console.log(data)
                    if(data.matchedCount === 0){
                        res.json({
                            message: 'Không tìm thấy!'
                        })
                    }else{
                        res.json({
                            message: 'Cập nhât thành công!',
                            data: data
                        })
                    }
                    
                })
                .catch(err => {
                    console.log(err)
                    res.json({
                        err: err
                    })
                })
        }
    }
}

module.exports = new UpdateProductsControllers