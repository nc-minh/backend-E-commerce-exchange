const Products = require('../../models/products')
class Search {
    async search(req, res, next) {
        const {
            keyword,
            discount,
            price,
            minPrice,
            maxPrice
        } = req.query

        console.log(minPrice, maxPrice)

        if(minPrice && maxPrice && keyword){
            console.log('min-max: price')
            await Products.find({
                $text: {
                    $search: keyword
                },
                price: {
                    $gte: Number(minPrice),
                    $lte: Number(maxPrice)
                }
            })
            .then(async data => {
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
        }else if(price === 'true' && keyword){
            console.log('price, keyword')
            await Products.find({
                $text: {
                    $search: keyword
                }
            })
            .sort({
                price: -1
            })
            .then(async data => {
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
        }else if(price === 'false' && keyword){
            console.log('price, keyword')
            await Products.find({
                $text: {
                    $search: keyword
                }
            })
            .sort({
                price: 1
            })
            .then(async data => {
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
        }else if(discount === 'true' && keyword){
            console.log('discount, keyword')
            await Products.find({
                $text: {
                    $search: keyword
                }
            })
            .sort({
                discount: -1
            })
            .then(async data => {
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
        }else if(discount === 'false' && keyword){
            console.log('discount, keyword')
            await Products.find({
                $text: {
                    $search: keyword
                }
            })
            .sort({
                discount: 1
            })
            .then(async data => {
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
        }else if (!keyword) {
            res.json({
                message: 'Thiếu từ khóa cần tìm kiếm!',
                status: 'failure'
            })
            // {
            //     name: new RegExp(keyword, 'i')
            // }
        } else {
            await Products.find({
                    $text: {
                        $search: keyword
                    }
                })
                .then(async data => {
                    console.log('keyword')
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