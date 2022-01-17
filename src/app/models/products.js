const mongoose = require('mongoose')
const Schema = mongoose.Schema
var mongooseDelete = require('mongoose-delete')

const Products = new Schema({
    name: String,
    quantity: Number,
    sold: Number,
    price: Number,
    discount: Number,
    img: Array,
    video: Array,
    category: String,
    trademark: String,
    option: Array,
    color: Array,
    detail: Array,
    description: String
},{
    collection: 'Products'
})

Products.plugin(mongooseDelete, { 
    deletedAt : true,
    deletedBy : true,
    overrideMethods: 'all' 
})

Products.index({
    name: 'text',
    description: 'text'
})



const productsModel = mongoose.model('Products', Products)

module.exports = productsModel