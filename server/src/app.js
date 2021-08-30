console.log('hello you')
const express = require('express')
const bodyParser = require('body-parser')
const { sequelize } = require('./models')
const config = require('./config/config')
const db = require("./models")
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())


require('./routes')(app)
require('./testRouter')(app)

sequelize.sync({force: false})
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
