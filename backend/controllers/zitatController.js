const asyncHandler = require('express-async-handler')
const ZitatModel = require("../model/zitatModel");

const getZitate = ((req, res) => {
    ZitatModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

module.exports = {
    getZitate
}
