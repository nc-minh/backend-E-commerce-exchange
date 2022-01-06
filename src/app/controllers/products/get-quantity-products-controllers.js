const Products = require('../../models/products')
class GetQuantityProductsControllers {
    getQuantityProducts(req, res, next) {
        const category = req.query.category
        const trademark = req.query.trademark
        const discount = Number(req.query.discount)
        console.log(category, trademark, discount)

        if(category && trademark && discount || discount == 0){
            Products.count({
                category: category,
                trademark: trademark,
                discount: discount
            })
            .then(data => {
                console.log(data)
                res.json({
                    status: 'success',
                    quantity: data,
                    note: 'full: category, trademark, discount'
                })
            })
            .catch(err => {
                res.json({
                    err: err
                })
            })
        }else if(category && trademark){
            Products.count({
                category: category,
                trademark: trademark
            })
            .then(data => {
                console.log(data)
                res.json({
                    status: 'success',
                    quantity: data,
                    note: 'full: category, trademark'
                })
            })
            .catch(err => {
                res.json({
                    err: err
                })
            })
        }else if(category && discount || discount == 0){
            Products.count({
                category: category,
                discount: discount
            })
            .then(data => {
                console.log(data)
                res.json({
                    status: 'success',
                    quantity: data,
                    note: 'full: category, discount'
                })
            })
            .catch(err => {
                res.json({
                    err: err
                })
            })
        }else if(trademark && discount || discount == 0){
            Products.count({
                discount: discount,
                trademark: trademark
            })
            .then(data => {
                console.log(data)
                res.json({
                    status: 'success',
                    quantity: data,
                    note: 'full: discount, trademark'
                })
            })
            .catch(err => {
                res.json({
                    err: err
                })
            })
        }else if (category) {
            Products.count({
                    category: category
                })
                .then(data => {
                    console.log(data)
                    res.json({
                        status: 'success',
                        quantity: data,
                        note: 'category'
                    })
                })
                .catch(err => {
                    res.json({
                        err: err
                    })
                })
        } else if (trademark) {
            Products.count({
                    trademark: trademark
                })
                .then(data => {
                    console.log(data)
                    res.json({
                        status: 'success',
                        quantity: data,
                        note: 'trademark'
                    })
                })
                .catch(err => {
                    res.json({
                        err: err
                    })
                })
        } else if (discount || discount == 0) {
            Products.count({
                    discount: discount
                })
                .then(data => {
                    console.log(data)
                    console.log('helo')
                    res.json({
                        status: 'success',
                        quantity: data,
                        note: 'discount'
                    })
                })
                .catch(err => {
                    res.json({
                        err: err
                    })
                })
        } else {
            Products.count({})
                .then(data => {
                    console.log(data)
                    res.json({
                        status: 'success',
                        quantity: data,
                        note: 'default'
                    })
                })
                .catch(err => {
                    res.json({
                        err: err
                    })
                })
        }




    }
}

module.exports = new GetQuantityProductsControllers