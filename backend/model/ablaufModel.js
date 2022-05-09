const mongoose = require('mongoose')

const AblaufSchema = new mongoose.Schema({
    badgeID: {
        type:Number,
        required:true,
    },
    text: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Ablauf', AblaufSchema)