const Products = require('../../../models/products')
class ForceDeleteProductsControllers {
    // [DELETE] api/products/force-delete-products/:id
    softDeleteProducts(req, res, next){
        const _idProducts = req.params.id

        Products.deleteOne({
            _id: _idProducts
        })
        .then(data => {
            console.log(data)

            if(data.deletedCount === 0){
                res.json({
                    message: 'Không tìm thấy product!',
                    status: 'failure'
                })
            }else{
                res.json({
                    message: 'Xóa thành công user trên DB!',
                    status: 'success'
                })
            }
            
        })
        .catch(err => {
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

module.exports = new ForceDeleteProductsControllers