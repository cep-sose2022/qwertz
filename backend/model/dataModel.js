const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Data', dataSchema)

