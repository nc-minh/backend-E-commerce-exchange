const mongoose = require('mongoose')
const Schema = mongoose.Schema
var mongooseDelete = require('mongoose-delete')

const Products = new Schema({
    name: String,
    price: Number,
    quantity: Number,
    img: Array,
    video: Array,
    category: String,
    trademark: String,
    sold: Number,
    size: Array,
    discount: Number,
    description: String,
    color: Array
},{
    collection: 'Products'
})

Products.plugin(mongooseDelete, { 
    deletedAt : true,
    deletedBy : true,
    overrideMethods: 'all' 
})

const productsModel = mongoose.model('Products', Products)

module.exports = productsModel