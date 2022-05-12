const KonversationModel = require("../model/konversationModel");

const getKonversation = ((req, res) => {
    KonversationModel.find({badgeID: req.params.badgeID, modiID: req.params.modiID}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})


const postKonversation = (async (req, res) => {
    const konversation = req.body
    const newKonversation = new KonversationModel(konversation)
    await newKonversation.save()
    res.json(konversation)
})

module.exports = {
    getKonversation,
    postKonversation
}
