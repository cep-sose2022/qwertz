const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
connectDB()
const port = process.env.PORT || 5000
const app = express()

app.use(express.json())

app.use(express.urlencoded({extended: false}))
app.use('/', require('./routes/dataRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))
