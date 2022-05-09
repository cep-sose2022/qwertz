const mongoose = require('mongoose')

const BadgeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    modis: [{
        type: String,
        required: true,
    }

    ]
})

module.exports = mongoose.model('Badge', BadgeSchema)
