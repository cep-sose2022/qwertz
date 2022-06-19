const mongoose = require('mongoose')

const BadgeSchema = new mongoose.Schema({
    badgeID: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    passed: {
        type: Boolean,
        required: true
    },
    unlocked: {
        type: Boolean,
        required: true
    },
    modis: [
        {
            name: {
                type: String,
                required: true,
            },
            modiID: {
                type: Number,
                required: true
            }
        }
    ]
})

module.exports = mongoose.model('Badge', BadgeSchema)
