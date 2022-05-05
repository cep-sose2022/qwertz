const asyncHandler = require('express-async-handler')
const KonversationModel = require("../model/konversationModel");

// @desc    Get data
// @route   GET /api/data
// @access  Private
const getKonversation = ((req, res) => {
    KonversationModel.find({}, (err, result) => {
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
