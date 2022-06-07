const mongoose = require('mongoose')

const SammlungSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    sammlung: {
        type: String,
        required: true,
    }

})

module.exports = mongoose.model('Sammlung', SammlungSchema)
