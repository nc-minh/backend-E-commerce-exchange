const Products = require('../../models/products')
class GetProductsControllers {
    getProducts(req, res, next){
        const limit = Number(req.query.limit)
        const page = Number(req.query.page)

        if(limit && page){
            try {
                Products.find({})
                .skip(page*20)
                .limit(limit)
                .then(data => {
                    res.json({
                        data: data,
                        message: 'success',
                    })
                })
                .catch(err => {
                    console.log(err)
                    res.json({
                        err: err
                    })
                })
            } catch (error) {
                console.log(error)
                res.json({
                    error: error
                })
            }
        }else if(limit){
            try {
                Products.find()
                .limit(limit)
                .then(data => {
                    res.json({
                        data: data,
                        message: 'success',
                    })
                })
                .catch(err => {
                    res.json({
                        err: err
                    })
                })
            } catch (error) {
                console.log(error)
                    res.json({
                        error: error
                    })
            }
        }else if(page){
            try {
                Products.find({})
                .skip(page*20)
                .limit(20)
                .then(data => {
                    res.json({
                        data: data,
                        message: 'success',
                    })
                })
                .catch(err => {
                    console.log(err)
                    res.json({
                        err: err
                    })
                })
            } catch (error) {
                console.log(error)
                    res.json({
                        error: error
                    })
            }
        }else{
            try {
                Products.find()
                .limit(20)
                .then(data => {
                    res.json({
                        data: data,
                        message: 'success',
                        note: 'Default limit is 20'
                    })
                })
                .catch(err => {
                    res.json({
                        err: err
                    })
                })
            } catch (error) {
                console.log(error)
                    res.json({
                        error: error
                    })
            }
        }
        
    }
}

module.exports = new GetProductsControllers