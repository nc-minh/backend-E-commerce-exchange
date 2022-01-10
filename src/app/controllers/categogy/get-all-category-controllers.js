const Category = require('../../models/category')
class GetAllControllers {
    getAllCategory(req, res, next) {

        Category.find({})
            .then(data => {
                console.log(data)
                var list = []
                data.forEach(item => list.push(item.name))

                res.json({
                    message: 'Danh sách các danh mục!',
                    data: list
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

module.exports = new GetAllControllers