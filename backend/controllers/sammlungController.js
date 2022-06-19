const SammlungModel = require("../model/sammlungModel");

const getSammlung = ((req, res) => {
    SammlungModel.find({ badgeID: req.params.badgeID }, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

const postSammlung = (async (req, res) => {
    const sammlung = req.body
    const newSammlung = new SammlungModel(sammlung)
    await newSammlung.save()
    res.json(sammlung)
})

module.exports = {
    getSammlung,
    postSammlung
}
