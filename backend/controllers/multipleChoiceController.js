const MultipleChoiceModel = require("../model/multipleChoiceModel");

const getMultipleChoice = ((req, res) => {
    MultipleChoiceModel.find({badgeID: req.params.badgeID, modiID: req.params.modiID}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

const postMultipleChoice = (async (req, res) => {
    const multipleChoice = req.body
    const newMultipleChoice = new MultipleChoiceModel(multipleChoice)
    await newMultipleChoice.save()
    res.json(multipleChoice)
})

module.exports = {
    getMultipleChoice,
    postMultipleChoice
}
