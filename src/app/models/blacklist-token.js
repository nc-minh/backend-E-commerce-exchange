const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlackListToken = new Schema({
    token: String,
    deleteAt: Date,
    ready: Boolean
},{
    collection: 'BlackListToken'
})

const blackListTokenModel = mongoose.model('BlackListToken', BlackListToken)

module.exports = blackListTokenModel