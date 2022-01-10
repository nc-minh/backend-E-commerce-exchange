const mongoose = require('mongoose')
const Schema = mongoose.Schema
var mongooseDelete = require('mongoose-delete')

const Category = new Schema({
    name: String
},{
    collection: 'Category'
})

Category.plugin(mongooseDelete, { 
    deletedAt : true,
    deletedBy : true,
    overrideMethods: 'all' 
})

const categoryModel = mongoose.model('Category', Category)

module.exports = categoryModel