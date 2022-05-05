const asyncHandler = require("express-async-handler");
const DataModel = require("../model/dataModel");

// @desc    Get data
// @route   GET /api/data
// @access  Private
const getData = asyncHandler(async (req, res) => {
    DataModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

module.exports = {
    getData
}
