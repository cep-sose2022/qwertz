const asyncHandler = require('express-async-handler')
const ZuordnungModel = require("../model/zuordnungModel");

// @desc    Get data
// @route   GET /api/data
// @access  Private
const getZuordnung = ((req, res) => {
    ZuordnungModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

module.exports = {
    getZuordnung
}
