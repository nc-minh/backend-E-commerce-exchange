const Products = require('../../../models/products')
class RestoreProductsControllers {
    // [PATCH] api/products/restore-products/:id
    restoreProducts(req, res, next){
        const _idProducts = req.params.id

        Products.restore({
            _id: _idProducts
        })
        .then(data => {
            if(data.matchedCount === 0){
                res.json({
                    message: 'Không tìm thấy sản phẩm!',
                    status: 'failure'
                })
            }else if(data.modifiedCount === 0){
                res.json({
                    message: 'Sản phẩm này không bị xóa!',
                    status: 'failure'
                })
            }else{
                res.json({
                    message: 'Khôi phục thành công sản phẩm!',
                    status: 'success'
                })
            }
            
        })
        .catch(err => {
            if(err.name === 'CastError'){
                res.json({
                    message: 'Truyền sai định dạng id cần restore!',
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

module.exports = new RestoreProductsControllers