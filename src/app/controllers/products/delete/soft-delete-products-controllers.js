const Products = require('../../../models/products')
class SoftDeleteProductsControllers {
    // [DELETE] api/products/sort-delete-products/:id
    softDeleteProducts(req, res, next){
        const _idProducts = req.params.id
        var verify = req.verify
        const idUserdeleted = verify._id
        console.log(_idProducts)

        Products.delete({
            _id: _idProducts
        }, idUserdeleted)
        .then(data => {
            console.log(data)
            if(data.matchedCount === 0){
                res.json({
                    message: 'Không tìm thấy sản phẩm!',
                    status: 'failure'
                })
            }else{
                res.json({
                    message: 'Xóa thành công sản phẩm!',
                    status: 'success'
                })
            }
            
        })
        .catch(err => {
            console.log(err)
            if(err.name === 'CastError'){
                res.json({
                    message: 'Truyền sai định dạng id cần xóa!',
                    status: 'error'
                })
            }else{
                res.json({
                    message: 'error',
                    err: err
                })
            }
            
        })
        
        
    }
}

module.exports = new SoftDeleteProductsControllers