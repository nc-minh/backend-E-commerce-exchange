const Accounts = require('../models/accounts')
class RegisterControllers{
    register(req, res, next){
        const username = String(req.body.username)
        const password = String(req.body.password)

        const REGEX = /^\w+$/g
        const regexCheck = REGEX.test(username)

        console.log(username)
        console.log(password)

        if(username.length < 5 || password.length < 5 || username.length > 24 || password.length > 24){
            res.json({
                message: 'Tài khoản và mật khẩu phải trên 5 và ít hơn 24 kí tự!',
                status: 'error-length'
            })
        }else if(!regexCheck){
            res.json({
                message: 'Tài khoản Không được chứa kí tự đặc biệt!',
                status: 'error-character'
            })
        }else{
            Accounts.findOne({
                username: username
            })
            .then(data => {
                if (data) {
                    console.log(data)
                    res.json({
                        message: 'Tài khoản đã tồn tại!',
                        status: 'exist'
                    })
                } else {
                    Accounts.create({
                        username: username,
                        password: password
                    })
                    console.log('tạo tài khoản thành công!')
                    res.json({
                        message: 'Tạo tài khoản thành công!',
                        status: 'success'
                    })
                }
            })
            .then(() => {
                console.log('Successfully!')
                
            })
            .catch(err => {
                console.log('Failure!')
                console.log(err)
                res.json({
                    message: 'Tạo tài khoản thất bại!'
                })
            })
        }
        
    }
}

module.exports = new RegisterControllers