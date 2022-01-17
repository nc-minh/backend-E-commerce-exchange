const Products = require('../../models/products')
class GetProductsCategoryControllers {
    getProductsCategory(req, res, next){
        const category = req.query.category
        console.log(category)

        Products.find({
            "category": String(category)
        })
        .then(data => {
            console.log(data)
            if(data.length === 0){
                res.json({
                    message: 'Không có sản phẩm trong danh mục này!',
                    status: 'failure'
                })
            }else{
                res.json({
                    status: 'success',
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

module.exports = new GetProductsCategoryControllers