const mongoose = require('mongoose')

const multipleChoiceSchema = new mongoose.Schema({
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
                required: true
            },
            aufgaben: [
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
                            },
                            isRichtig: {
                                type: Boolean,
                                required: true
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

module.exports = mongoose.model('MultipleChoice', multipleChoiceSchema)
