const mongoose = require('mongoose')

const wimmelbildSchema = new mongoose.Schema({
    badgeID: {
        type: Number,
        required: true,
    },
    modiID: {
        type: Number,
        required: true
    },
    // image: {
    //     type: Image,
    //     required: true
    // },
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
