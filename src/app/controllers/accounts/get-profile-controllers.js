const Accounts = require('../../models/accounts')
class GetProfileControllers {
    getProfile(req, res, next){
        const verify = req.verify
        if(verify){
            Accounts.findOne({
                _id: verify._id
            })
            .then(data => {
                res.json({
                    username: data.username,
                    address: data.address,
                    email: data.email,
                    image: data.image,
                    status: 'success'
                })
            })
            .catch(err => {
                if(err.name === 'CastError'){
                    res.json({
                        message: 'Không tìm thấy user!',
                        status: 'failure'
                    })
                }else{
                    res.json({
                        message: err
                    })
                }
                
            })
        }else{
            res.json({
                message: 'fail'
            })
        }
    }
}

module.exports = new GetProfileControllers