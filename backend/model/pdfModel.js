const mongoose = require('mongoose')

const PDFSchema = new mongoose.Schema({
    badgeID: {
        type: Number,
        required: true,
    },
    pdf: {
        type: String,
        required: true,
    }

})

module.exports = mongoose.model('Pdf', PDFSchema)
