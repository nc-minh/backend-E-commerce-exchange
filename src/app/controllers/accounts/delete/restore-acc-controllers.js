const Accounts = require('../../../models/accounts')
class RestoreAccControllers {
    // [PATCH] api/accounts/restore-acc/:id
    restoreAcc(req, res, next){
        const _idUser = req.params.id
        console.log(_idUser)

        Accounts.restore({
            _id: _idUser
        })
        .then(data => {
            console.log(data)
            if(data.matchedCount === 0){
                res.json({
                    message: 'Không tìm thấy user!',
                    status: 'failure'
                })
            }else if(data.modifiedCount === 0){
                res.json({
                    message: 'Tài khoản này không bị xóa!',
                    status: 'failure'
                })
            }else{
                res.json({
                    message: 'Khôi phục thành công user!',
                    status: 'success'
                })
            }
            
        })
        .catch(err => {
            console.log(err)
            if(err.name === 'CastError'){
                res.json({
                    message: 'Truyền sai định dạng id cần restore!',
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

module.exports = new RestoreAccControllers