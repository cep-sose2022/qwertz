const AblaufModel = require("../model/ablaufModel");

const getAblauf = ((req, res) => {
    AblaufModel.find({badgeID: req.params.badgeID, modiID: req.params.modiID}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

const postAblauf = (async (req, res) => {
    const ablauf = req.body
    const newAblauf = new AblaufModel(ablauf)
    await newAblauf.save()
    res.json(ablauf)
})

module.exports = {
    getAblauf,
    postAblauf
}
