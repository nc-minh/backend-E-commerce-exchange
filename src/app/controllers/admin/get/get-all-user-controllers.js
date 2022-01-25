const Accounts = require('../../../models/accounts')
class GetAllUserControllers{
    getAllUser(req, res, next){
        Accounts.find({})
        .then(data => {
            console.log(data)
            var newData = []
            data.map(item => {
                newData.push({
                    deleted: item.deleted,
                    deletedBy: item.deletedBy,
                    deletedAt: item.deletedAt,
                    id: item._id,
                    username: item.username,
                    role: item.role,
                    address: item.address,
                    email: item.email,
                    image: item.image
                })
            })
            res.json({
                data: newData
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

module.exports = new GetAllUserControllers