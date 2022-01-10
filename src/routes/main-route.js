const homeRouter = require('./home-route')
const apiAccountsRouter = require('./api-accounts-route')
const apiProductsRouter = require('./api-products-route')
const apiCategoryRouter = require('./api-category-route')

function routeMap(app){
    app.use('/api/accounts', apiAccountsRouter)
    
    app.use('/api/products', apiProductsRouter)

    app.use('/api/category', apiCategoryRouter)

    app.use('/', homeRouter)
}

module.exports = routeMap