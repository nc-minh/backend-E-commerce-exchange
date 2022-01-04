const Accounts = require('../../models/accounts')
class UpdatePassWordControllers {
    // [PATCH: api/update-password]
    updatePassword(req, res, next){
        const verify = req.verify
        const newPassword = String(req.body.newPassword)
        console.log(newPassword)
        if(!newPassword){
            res.json({
                message: 'Không được để trống mật khẩu!',
                status: 'failure-empty'
            })
        }else if(newPassword.length < 5 || newPassword.length > 254){
            res.status(203).json({
                message: 'Mật khẩu mới phải trên 5 và ít hơn 254 kí tự!',
                status: 'failure-length'
            })
        }else if(verify){
            Accounts.updateOne({
                _id: verify._id
            }, {
                password: newPassword
            })
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    res.json({
                        message: 'Cập nhật mật khẩu mới thành công!',
                        status: 'success'
                    })
                } else {
                    res.json({
                        message: 'Cập nhật mật khẩu mới thất bại!',
                        status: 'failure'
                    })
                }
                
            })
            .catch(err => {
                console.log(err)
                res.json({
                    err: err
                })
            })
        }else{
            res.json('fail')
        }
    }
}

module.exports = new UpdatePassWordControllers