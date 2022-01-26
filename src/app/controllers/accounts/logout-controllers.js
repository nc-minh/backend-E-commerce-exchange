const jwt = require('jsonwebtoken')
const Accounts = require('../../models/accounts')
const BlackListToken = require('../../models/blacklist-token')

class LogoutControllers{
    async logout(req, res, next){
        const token = req.token
        var now = Date.now()

        BlackListToken.create({
            token: token,
            deleteAt: now
        })
        .then(data => {
            console.log(data)
            res.json({
                message: 'Logout successfully!'
            })
        })
        .catch(err => {
            console.log(err)
            res.json({
                err: err
            })
        })
    }
}

module.exports = new LogoutControllers