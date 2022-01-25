const homeRouter = require('./home-route')
const apiAccountsRouter = require('./api-accounts-route')
const apiProductsRouter = require('./api-products-route')
const apiCategoryRouter = require('./api-category-route')
const apiSearchRouter = require('./api-search-route')
const apiFilterRouter = require('./api-filter-route')
const apiAdminRouter = require('./admin/api-admin-accounts-route')

function routeMap(app){
    app.use('/api/accounts', apiAccountsRouter)
    
    app.use('/api/products', apiProductsRouter)

    app.use('/api/category', apiCategoryRouter)

    app.use('/api/search', apiSearchRouter)
    
    app.use('/api/filter', apiFilterRouter)

    app.use('/admin/accounts', apiAdminRouter)

    app.use('/', homeRouter)
}

module.exports = routeMap