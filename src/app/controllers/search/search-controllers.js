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
                $text: {
                    $search: keyword
                }
            })
            .then( async data => {
                console.log(data)
                if(data.length === 0){
                    // await Products.find({
                    //     description: new RegExp(keyword, 'i')
                    // })
                    // .then(data => {
                    //     res.json({
                    //         data: data
                    //     })
                    // })
                    // .catch(error => {
                    //     console.log(error)
                    //     res.json({
                    //         error: error
                    //     })
                    // })
                    res.json('huhu')

                }else{
                    res.json({
                        data: data
                    })
                }

                
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