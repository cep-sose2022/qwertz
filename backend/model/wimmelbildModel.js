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

    data: {
        imageName: {
            type: String,
            required: true
        },
        buttons: [
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
    }
})

module.exports = mongoose.model('Wimmelbild', wimmelbildSchema)
