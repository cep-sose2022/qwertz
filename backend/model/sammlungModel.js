const mongoose = require('mongoose')

const SammlungSchema = new mongoose.Schema({
    badgeID: {
        type: Number,
        required: true,
    },
    sammlung: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Sammlung', SammlungSchema)
