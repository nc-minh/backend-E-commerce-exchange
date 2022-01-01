const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000

app.use(express.json())

//connect DB
const DB = require('./src/app/models/connectDB')
DB.connect()

//init route
const route = require('./src/routes/main-route')
route(app)


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})