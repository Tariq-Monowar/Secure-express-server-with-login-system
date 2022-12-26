require('./config/db')
const express = require('express')
const cors = require("cors")
const morgan = require('morgan')
const userRouter = require('./routes/user.routes')
const app = express()

app.use(morgan("dev"))
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/api/user',userRouter)

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`)
})

app.use((req, res, next) => {
  res.status(404).json({
    message: '404! Page Not Found'
  })
})

app.use((err, req, res, next) => {
  res.status(500).json({
    message: '500! Something went wrong on the server'
  })
})

module.exports = app
