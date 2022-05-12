const ZitatModel = require("../model/zitatModel");
const KonversationModel = require("../model/konversationModel");

const getZitate = ((req, res) => {
    ZitatModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

const postZitat = (async (req, res) => {
    const zitat = req.body
    const newZitat = new ZitatModel(zitat)
    await newZitat.save()
    res.json(zitat)
})

module.exports = {
    getZitate,
    postZitat
}
