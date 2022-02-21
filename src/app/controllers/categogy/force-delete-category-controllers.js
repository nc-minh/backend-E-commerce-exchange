const Category = require('../../models/category')
class ForceDeleteControllers{
    forceDeleteCategory(req, res, next){
        const name = req.body.name
        const verify = req.verify
        const userDeleted = verify._id

        if(!name){
            res.json({
                message: 'Tên danh mục không được undefined!',
                status: 'error'
            })
        }else{
            Category.deleteOne({
                name: String(name)
            }, userDeleted)
            .then(data => {
                console.log(data)

                if(data.deletedCount === 0){
                    res.json({
                        message: 'Không tìm thấy category name!',
                        status: 'failure'
                    })
                }else{
                    res.json({
                        message: 'Xóa thành công category trên DB!',
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
}

module.exports = new ForceDeleteControllers