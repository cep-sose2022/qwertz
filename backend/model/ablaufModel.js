const mongoose = require('mongoose')

const AblaufSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Ablauf', AblaufSchema)