const mongoose = require('mongoose')

const GifSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gif: {
        type: String,
        required: true,
    }

})

module.exports = mongoose.model('Gif', GifSchema)
