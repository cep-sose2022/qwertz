const ZuordnungModel = require("../model/zuordnungModel");

const getZuordnung = ((req, res) => {
    ZuordnungModel.find({badgeID: req.params.badgeID, modiID: req.params.modiID}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

const postZuordnung = (async (req, res) => {
    const zuordnung = req.body
    const newZuordnung = new ZuordnungModel(zuordnung)
    await newZuordnung.save()
    res.json(zuordnung)
})

module.exports = {
    getZuordnung,
    postZuordnung
}
