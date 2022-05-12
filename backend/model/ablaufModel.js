const mongoose = require('mongoose')

const AblaufSchema = new mongoose.Schema({
    badgeID: {
        type: Number,
        required: true,
    },
    modiID: {
        type: Number,
        required: true
    },
    data: [
        {
            text: {
                type: String,
                required: true
            }
        }
    ]

})

module.exports = mongoose.model('Ablauf', AblaufSchema)
