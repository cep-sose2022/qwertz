const asyncHandler = require('express-async-handler')
const BadgeModel = require("../model/badgeModel");

// @desc    Get data
// @route   GET /api/data
// @access  Private
const getBadge = ((req, res) => {
    BadgeModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

module.exports = {
    getBadge
}
