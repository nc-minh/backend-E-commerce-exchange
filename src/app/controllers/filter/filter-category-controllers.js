const Category = require('../../models/category')
const Products = require('../../models/products')
class FilterCategoryControllers {
    async filterCategoryControllers(req, res, next) {
        var {
            category,
            price,
            discount,
            minPrice,
            maxPrice
        } = req.query

        var ascending = 1 // tang dan
        var descending = -1 // giam dan
        var sort
         
        if(price === 'true'){
            sort = {
                price: descending
            }
        }else if(price === 'false'){
            sort = {
                price: ascending
            }
        }else if(discount === 'true'){
            sort = {
                discount: descending
            }
        }else if(discount === 'false'){
            sort = {
                discount: ascending
            }
        }if(!minPrice || !maxPrice){
            minPrice = 0
            maxPrice = 999999999999999
        }

        await Products.find({
                category: category,
                price: {
                    $gte: Number(minPrice),
                    $lte: Number(maxPrice)
                }
            })
            .sort(sort)
            .then(data => {
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

module.exports = new FilterCategoryControllers