const jwt = require('jsonwebtoken')
const Accounts = require('../models/accounts')

class CheckRoleControllers{
    checkAdmin(req, res, next){
        try {
            const token = req.cookies.tokenLogin
            const verify = jwt.verify(token, process.env.JWT_SECRET)
            if(verify){
                Accounts.findOne({
                    _id: verify._id
                })
                .then(data => {
                    if(data.role === 'admin'){
                        next()
                    }else{
                        res.status(203).json({
                            message: 'Bạn không có quyền!',
                            status: 'failure'
                        })
                    }
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json({
                        message: err,
                        status: 'error'
                    })
                })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: error,
                status: 'error'
            })
        }
    }

    checkLogin(req, res, next){
        try {
            const token = req.cookies.tokenLogin
            const verify = jwt.verify(token, process.env.JWT_SECRET)
            if(verify){
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
                message: error,
                status: 'error'
            })
        }
    }
}

module.exports = new CheckRoleControllers