const mongoose = require('mongoose')

const wimmelbildSchema = new mongoose.Schema({
    buttons: [
        {
            text: {
                type: String,
                required: true,
                topleftCorner: {
                    x: Number,
                    y: Number,
                    required: true,
                },
                buttomRightCorner: {
                    x: Number,
                    y: Number,
                    required: true,
                }
            }
        }
    ]
})

module.exports = mongoose.model('Wimmelbild', wimmelbildSchema)
