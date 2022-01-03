const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Accounts = new Schema({
    username: String,
    password: String,
    role: String,
    image: String,
    email: String,
    address: String
},{
    collection: 'Accounts'
})

const accountsModel = mongoose.model('Accounts', Accounts)

module.exports = accountsModel