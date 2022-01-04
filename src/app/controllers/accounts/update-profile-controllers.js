const Accounts = require('../../models/accounts')
class UpdateProfileControllers {
    // [PATCH: api/update-profile]
    updateProfile(req, res, next) {
        const verify = req.verify
        const image = req.body.image
        const email = req.body.email
        const address = req.body.address

        const REGEX = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/
        const regexCheck = REGEX.test(email)
        if (image.length > 254 || email.length > 254 || address.length > 254) {
            res.json({
                message: 'Độ dài chuỗi kí tự quá lớn!',
                status: 'failure-length'
            })
        } else if (!regexCheck) {
            res.json({
                message: 'Email bạn vừa nhập không đúng định dạng!',
                status: 'failure-format'
            })
        } else if (verify) {
            Accounts.updateOne({
                    _id: verify._id
                }, {
                    image: image,
                    email: email,
                    address: address
                })
                .then(data => {
                    console.log(data)
                    if (data.acknowledged) {
                        res.json({
                            message: 'Cập nhật thông tin thành công!',
                            status: 'success'
                        })
                    } else {
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
        } else {
            res.json('fail')
        }
    }
}

module.exports = new UpdateProfileControllers