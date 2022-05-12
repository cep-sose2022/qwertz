const WimmelbildModel = require("../model/wimmelbildModel");

const getWimmelbild = ((req, res) => {
    WimmelbildModel.find({badgeID: req.params.badgeID, modiID: req.params.modiID}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

const postWimmelbild = (async (req, res) => {
    const wimmelbild = req.body
    const newWimmelbild = new WimmelbildModel(wimmelbild)
    await newWimmelbild.save()
    res.json(wimmelbild)
})

module.exports = {
    getWimmelbild,
    postWimmelbild
}
