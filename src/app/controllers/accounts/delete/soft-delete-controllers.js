const Accounts = require('../../../models/accounts')
class SoftDeleteControllers {
    // [DELETE] api/accounts/sort-delete/:id
    softDelete(req, res, next){
        const _idUser = req.params.id
        var verify = req.verify
        const idUserdeleted = verify._id
        console.log(_idUser)

        Accounts.delete({
            _id: _idUser
        }, idUserdeleted)
        .then(data => {
            console.log(data)
            if(data.matchedCount === 0){
                res.json({
                    message: 'Không tìm thấy user!',
                    status: 'failure'
                })
            }else{
                res.json({
                    message: 'Xóa thành công user!',
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

module.exports = new SoftDeleteControllers