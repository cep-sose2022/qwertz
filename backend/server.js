const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
connectDB()
const port = process.env.PORT || 5000
const app = express()

const DataModel = require('./model/dataModel')
const ZitatModel = require('./model/zitatModel')

const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use(express.urlencoded({extended: false}))
app.use('/', require('./routes/dataRoutes'))




app.post("/createData", async (req, res) => {
    const data = req.body
    const newData = new DataModel(data)
    await newData.save()

    res.json(data)
})

app.post("/createZitat", async (req, res) => {
    const zitat = req.body
    const newZitat = new ZitatModel(zitat)
    await newZitat.save()

    res.json(zitat)
})


app.listen(port, () => console.log(`Server started on port ${port}`))
