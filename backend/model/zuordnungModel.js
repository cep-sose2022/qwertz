const mongoose = require('mongoose')

const zuordnungSchema = new mongoose.Schema({
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
            frage: {
                type: String,
                required: true,
            },
            antworten: [
                {
                    text: {
                        type: String,
                        required: true
                    }
                }
            ]
        }
    ]


})

module.exports = mongoose.model('Zuordnung', zuordnungSchema)
