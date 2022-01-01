const path = require('path')

class HomeControllers{
    //[GET: /]
    index(req, res, next){
        var url = path.join(__dirname, '../../resources/views/index.html')
        res.sendFile(url)
    }
}

module.exports = new HomeControllers