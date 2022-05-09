const asyncHandler = require('express-async-handler')
const WimmelbildModel = require("../model/wimmelbildModel");

const getWimmelbild = ((req, res) => {
    WimmelbildModel.find({id: req.params.id}, (err, result) => {
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
