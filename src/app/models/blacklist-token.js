const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlackListToken = new Schema({
    token: String,
    deleteAt: Date
},{
    collection: 'BlackListToken'
})

const blackListTokenModel = mongoose.model('BlackListToken', BlackListToken)

module.exports = blackListTokenModel