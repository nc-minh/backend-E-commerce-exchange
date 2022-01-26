const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000

var cors = require('cors')
app.use(cors())

app.use(express.json())
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// cookie parser
app.use(cookieParser())

//connect DB
const DB = require('./src/app/models/connectDB')
DB.connect()

//init route
const route = require('./src/routes/main-route')
route(app)

//require background job -> delete the expired token
require('./src/app/background-job/background-job')



app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})