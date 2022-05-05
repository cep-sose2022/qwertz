const mongoose = require('mongoose')

const konversationSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Konversation', konversationSchema)
