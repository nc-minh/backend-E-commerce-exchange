const Accounts = require('../../../../models/accounts')
class ForceDeleteAccControllers {
    forceDeleteAcc(req, res, next){
        const _idUser = req.params.id
        console.log(_idUser)

        Accounts.deleteOne({
            _id: _idUser
        })
        .then(data => {
            console.log(data)

            if(data.deletedCount === 0){
                res.json({
                    message: 'Không tìm thấy user!',
                    status: 'failure'
                })
            }else{
                res.json({
                    message: 'Xóa thành công user trên DB!',
                    status: 'success'
                })
            }
            
        })
        .catch(err => {
            console.log(err)
            if(err.name === 'CastError'){
                res.json({
                    message: 'Truyền sai định dạng id cần xóa!',
                    status: 'error'
                })
            }else{
                res.json({
                    message: 'error',
                    err: err
                })
            }
            
        })
    }
}

module.exports = new ForceDeleteAccControllers