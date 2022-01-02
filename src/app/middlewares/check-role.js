const jwt = require('jsonwebtoken')
const Accounts = require('../models/accounts')

class CheckRoleControllers{
    checkAdmin(req, res, next){

    }

    checkLogin(req, res, next){
        try {
            const token = req.cookies.tokenLogin
            const verify = jwt.verify(token, process.env.JWT_SECRET)
            if(verify){
                res.status(200).json({
                    message: 'Bạn đã đăng nhập!',
                    status: 'success'
                })
                next()
            }else{
                res.status(203).json({
                    message: 'Bạn chưa đăng nhập!',
                    status: 'failure'
                })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'Đã xảy ra lỗi!',
                status: 'error'
            })
        }
    }
}

module.exports = new CheckRoleControllers