const asyncHandler = require('express-async-handler')
const KonversationModel = require("../model/konversationModel");

const getKonversation = ((req, res) => {
    KonversationModel.find({id: req.params.id}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

module.exports = {
    getKonversation
}
