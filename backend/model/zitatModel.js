const mongoose = require('mongoose')

const zitatSchema = new mongoose.Schema({
    quote: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Zitat', zitatSchema)
