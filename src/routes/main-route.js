const homeRouter = require('./home-route')
const apiRouter = require('./api-route')

function routeMap(app){
    app.use('/api', apiRouter)

    app.use('/', homeRouter)
}

module.exports = routeMap