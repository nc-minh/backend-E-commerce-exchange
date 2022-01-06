const jwt = require('jsonwebtoken')
const Accounts = require('../../models/accounts')

class LoginControllers{
    // [POST: api/login]
    async login(req, res, next){
        const username = req.body.username
        const password = req.body.password

        const EXPIRESIN = '1d'

        await Accounts.findOne({
            username: username,
            password: password
        })
        .then(data => {
            if(data){
                var token = jwt.sign({
                    _id: data._id
                }, process.env.JWT_SECRET, {
                    expiresIn: EXPIRESIN
                })

                console.log(data)

                res.status(200).json({
                    message: 'Đăng nhập thành công!',
                    status: 'success',
                    token: token,
                    username: data.username
                })
            }else{
                res.status(400).json({
                    message: 'Tài khoản hoặc mật khẩu sai!',
                    status: 'failure'
                })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Đã có lỗi xảy ra!',
                status: 'error'
            })
        })
    }


}

module.exports = new LoginControllers