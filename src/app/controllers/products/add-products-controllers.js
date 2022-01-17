const Products = require('../../models/products')
var xss = require("xss")

class AddProductsControllers {
    addProducts(req, res, next) {

        // get and sanitizing data
        var name = req.body.name || ' '
        var price = req.body.price || 0
        var quantity = req.body.quantity || 0
        var img = req.body.img || []
        var video = req.body.video || []
        var category = req.body.category || ' '
        var trademark = req.body.trademark || ' '
        var sold = req.body.sold || 0
        var option = req.body.option || []
        var discount = req.body.discount || 0
        var color = req.body.color || []
        var detail = req.body.detail || []
        var description = req.body.description || ' '

        if(name === ' '){
            res.json({
                message: 'Không được thiếu tên sản phẩm',
                status: 'failure'
            })
        }else if(img.length === 0){
            res.json({
                message: 'Cần ít nhất một ảnh',
                status: 'failure'
            })
        }else if(description === ' '){
            res.json({
                message: 'Không được thiếu mô tả sản phẩm',
                status: 'failure'
            })
        }else if(category === ' '){
            res.json({
                message: 'Không được thiếu danh mục sản phẩm',
                status: 'failure'
            })
        }else if(detail.length === 0){
            res.json({
                message: 'Cần ít nhất một chi tiết sản phẩm',
                status: 'failure'
            })
        }else if(discount < 0 || discount > 100){
            res.json({
                message: 'Mức giảm giá (%) từ 0->100',
                status: 'failure'
            })
        }else if (name != xss(name) || price != xss(price) || quantity != xss(quantity) || img != xss(img) || video != xss(video) || category != xss(category) || trademark != xss(trademark) || sold != xss(sold) || option != xss(option) || discount != xss(discount) || color != xss(color) || detail != xss(detail) || description != xss(description)) {
            
            res.json({
                message: 'Ôi bạn ơi xss cc à :))',
                status: 'error'
            })
        } else {
            Products.create({
                    name: name,
                    quantity: quantity,
                    sold: sold,
                    price: price,
                    discount: discount,
                    img: img,
                    video: video,
                    category: category,
                    trademark: trademark,
                    option: option,
                    color: color,
                    detail: detail,
                    description: description
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
}

module.exports = new AddProductsControllers