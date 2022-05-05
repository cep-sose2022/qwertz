const asyncHandler = require('express-async-handler')
const WimmelbildModel = require("../model/wimmelbildModel");

// @desc    Get data
// @route   GET /api/data
// @access  Private
const getWimmelbild = ((req, res) => {
    WimmelbildModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

module.exports = {
    getWimmelbild
}
