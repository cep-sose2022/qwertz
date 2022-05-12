const mongoose = require('mongoose')

const wimmelbildSchema = new mongoose.Schema({
    aufgabenstellung: {
        type: String,
        required: true
    },
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
                required: true,
            },
            topLeftCorner: {
                x: {
                    type: Number,
                    required: true,
                },
                y: {
                    type: Number,
                    required: true,
                },
            },
            bottemRightCorner: {
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
