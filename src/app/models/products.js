const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Products = new Schema({
    name: String,
    price: Int32Array,
    quantity: Int32Array,
    img: Array,
    video: Array,
    category: String,
    trademark: String,
    sold: Int32Array,
    size: Array,
    discount: Int32Array,
    description: String
},{
    collection: 'Products'
})

const productsModel = mongoose.model('Products', Products)

module.exports = productsModel