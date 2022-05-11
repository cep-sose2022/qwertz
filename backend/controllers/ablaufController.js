const AblaufModel = require("../model/ablaufModel");

const getAblauf = ((req, res) => {
    AblaufModel.find({badgeID: req.params.id}, (err, result) => {
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
