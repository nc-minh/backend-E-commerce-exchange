// Using Node.js `require()`
const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/')

async function connect(){
    try {
        await mongoose.connect(process.env.MONGODB_CLOUD, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('%cDB connection successful!', 'font-size:10em;color:green;')
    } catch (error) {
        console.log('%cDB connection failed!', 'font-size:10em;color:red;')
    }
}

module.exports = { connect }

/**
 * $gt $gte >
 * $lt $lte <
 * $or
 * $in
 * limit
 * sort
 * skip
 */