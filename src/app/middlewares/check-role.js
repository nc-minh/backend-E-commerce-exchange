const jwt = require('jsonwebtoken')
const Accounts = require('../models/accounts')
const BlackListToken = require('../models/blacklist-token')

class CheckRoleControllers{
    async checkAdmin(req, res, next){
        try {
            const token = req.cookies.tokenLogin

            await BlackListToken.findOne({
                token: token
            })
            .then(data => {
                console.log(data)
                if(data){
                    res.json({
                        message: 'Phiên đăng nhập đã hết hạn',
                        status: 'failure'
                    })
                }else{
                    const verify = jwt.verify(token, process.env.JWT_SECRET)
                    req.verify = verify
                    req.token = token
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
                }
            })
            .catch(err => {
                console.log(err)
                res.json({
                    err: err
                })
            })
            
        } catch (error) {
            console.log(error)
            if(error.name === 'JsonWebTokenError'){
                res.status(400).json({
                    message: 'Token vừa gửi đã sai!',
                    status: 'error-wrongToken'
                })
            }else if(error.name === 'TokenExpiredError'){
                res.status(400).json({
                    message: 'Token vừa gửi đã hết hạn!',
                    status: 'error-tokenExpired'
                })
            }else{
                res.status(500).json({
                    message: error,
                    status: 'error'
                })
            }
        }
    }

    async checkLogin(req, res, next){
        try {
            const token = req.cookies.tokenLogin
    
            await BlackListToken.findOne({
                token: token
            })
            .then(data => {
                console.log(data)
                if(data){
                    res.json({
                        message: 'Phiên đăng nhập đã hết hạn',
                        status: 'failure'
                    })
                }else{
                    const verify = jwt.verify(token, process.env.JWT_SECRET)

                    req.verify = verify
                    req.token = token
                    if(verify){
                        next()
                    }else{
                        res.status(203).json({
                            message: 'Bạn chưa đăng nhập!',
                            status: 'failure'
                        })
                    }
                }
            })
            .catch(err => {
                console.log(err)
                res.json({
                    err: err
                })
            })
            
        } catch (error) {
            console.log(error)
            
            if(error.name === 'JsonWebTokenError'){
                res.status(400).json({
                    message: 'Token vừa gửi đã sai hoặc thiếu!',
                    status: 'error-wrongToken'
                })
            }else if(error.name === 'TokenExpiredError'){
                res.status(400).json({
                    message: 'Token vừa gửi đã hết hạn!',
                    status: 'error-tokenExpired'
                })
            }else{
                res.status(500).json({
                    message: error,
                    status: 'error'
                })
            }
        }
    }
}

module.exports = new CheckRoleControllers