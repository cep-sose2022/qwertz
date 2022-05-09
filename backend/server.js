const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
connectDB()
const port = process.env.PORT || 5000
const app = express()

const ZitatModel = require('./model/zitatModel')
const ablaufModel = require('./model/ablaufModel')

app.use(express.json())

app.use(express.urlencoded({extended: false}))
app.use('/', require('./routes/dataRoutes'))

app.post("/createZitat", async (req, res) => {
    const zitat = req.body
    const newZitat = new ZitatModel(zitat)
    await newZitat.save()

    res.json(zitat)
})

app.post("/createAblauf", async (req, res) => {
    const ablauf = req.body
    const newAblauf = new ablaufModel(ablauf)
    await newAblauf.save()

    res.json(ablauf)
})


app.listen(port, () => console.log(`Server started on port ${port}`))
