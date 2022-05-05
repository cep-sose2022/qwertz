const asyncHandler = require('express-async-handler')
const AblaufModel = require("../model/ablaufModel");

// @desc    Get data
// @route   GET /api/data
// @access  Private
const getAblauf = ((req, res) => {
    AblaufModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

module.exports = {
    getAblauf
}