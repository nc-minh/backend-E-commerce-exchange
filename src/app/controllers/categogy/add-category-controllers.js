const Category = require('../../models/category')
class AddCategoryControllers{
    addCategory(req, res, next){
        const name = req.body.name

        if(!name){
            res.json({
                message: 'Tên danh mục không được undefined!',
                status: 'error'
            })
        }else{
            Category.findOne({
                name: String(name)
            })
            .then(data => {
                if(data === null){
                    Category.create({
                        name: String(name)
                    })
                    .then(data => {
                        res.json({
                            message: 'Thêm danh mục thành công!',
                            status: 'success'
                        })
                    })
                    .catch(err => {
                        res.json({
                            err: err
                        })
                    })
                }else{
                    res.json({
                        message: 'Danh mục đã tồn tại',
                        status: 'exist'
                    })
                }
                
            })
            .catch(err => {
                res.json({
                    err: err
                })
            })
            
        }
    }
}

module.exports = new AddCategoryControllers