const Accounts = require('../models/accounts')
class UpdateProfileControllers{
    updateProfile(req, res, next){
        const verify = req.verify
        const image = req.body.image
        const email = req.body.email
        const address = req.body.address

        if(verify){
            Accounts.updateOne({
                _id: verify._id
            }, {
                image: image,
                email: email,
                address: address
            })
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    res.json({
                        message: 'Cập nhật thông tin thành công!',
                        status: 'success'
                    })
                }else{
                    res.json({
                        message: 'Data cần update gửi không đúng định dạng!',
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

module.exports = new UpdateProfileControllers