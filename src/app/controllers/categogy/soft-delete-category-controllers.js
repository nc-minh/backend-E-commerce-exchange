const Category = require('../../models/category')
class SoftDeleteControllers{
    softDeleteCategory(req, res, next){
        const name = req.body.name
        const verify = req.verify
        const userDeleted = verify._id

        if(!name){
            res.json({
                message: 'Tên danh mục không được undefined!',
                status: 'error'
            })
        }else{
            Category.delete({
                name: String(name)
            }, userDeleted)
            .then(data => {
                console.log(data)
                if(data.matchedCount === 1){
                    res.json({
                        message: 'Xóa thành công danh mục!',
                        status: 'success'
                    })
                }else{
                    res.json({
                        message: 'Không tìm thấy danh mục!',
                        status: 'failure'
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

module.exports = new SoftDeleteControllers