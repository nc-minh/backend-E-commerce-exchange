const Products = require('../../models/products')
class Search{
    async search(req, res, next){
        const keyword = req.query.keyword
        if(!keyword){
            res.json({
                message: 'Thiếu từ khóa cần tìm kiếm!',
                status: 'failure'
            })
            // {
            //     name: new RegExp(keyword, 'i')
            // }
        }else{
            await Products.find({
                name: new RegExp(keyword, 'i')
            })
            .then(data => {
                console.log(data)
                res.json({
                    data: data
                })
            })
            .catch(error => {
                console.log(error)
                res.json({
                    error: error
                })
            })
        }
    }
}

module.exports = new Search