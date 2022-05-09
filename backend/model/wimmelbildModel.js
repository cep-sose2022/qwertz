const mongoose = require('mongoose')

const wimmelbildSchema = new mongoose.Schema({
    badgeID: {
        type: Number,
        required: true,
    },
    buttons: [
        {
            text: {
                type: String,
                required: true,
            },
            topleftCorner: {
                x: {
                    type: Number,
                    required: true,
                },
                y: {
                    type: Number,
                    required: true,
                },
            },
            buttomRightCorner: {
                x: {
                    type: Number,
                    required: true,
                },
                y: {
                    type: Number,
                    required: true,
                },
            }
        }
    ]
})

module.exports = mongoose.model('Wimmelbild', wimmelbildSchema)
