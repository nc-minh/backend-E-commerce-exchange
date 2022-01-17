const Products = require('../../models/products')
class GetProductsControllers {
    getProducts(req, res, next){
        const limit = Number(req.query.limit)
        const page = Number(req.query.page)

        const STEP = 20

        if(limit && page){
            try {
                Products.find({})
                .skip(page*STEP)
                .limit(limit)
                .then(data => {
                    res.json({
                        data: data,
                        message: 'success',
                        note: 'limit, page'
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
        }else if(limit){
            try {
                Products.find()
                .limit(limit)
                .then(data => {
                    res.json({
                        data: data,
                        message: 'success',
                        note: 'limit'
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
                .skip(page*STEP)
                .limit(STEP)
                .then(data => {
                    res.json({
                        data: data,
                        message: 'success',
                        note: 'page'
                    })
                })
                .catch(err => {
                    res.json({
                        err: err
                    })
                })
            } catch (error) {
                    res.json({
                        error: error
                    })
            }
        }else{
            try {
                Products.find()
                .limit(STEP)
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
                    res.json({
                        error: error
                    })
            }
        }
        
    }
}

module.exports = new GetProductsControllers