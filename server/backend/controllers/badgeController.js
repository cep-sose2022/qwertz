const BadgeModel = require("../model/badgeModel");

const getBadge = ((req, res) => {

    BadgeModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

const postBadge = (async (req, res) => {
    const badge = req.body
    const newBadge = new BadgeModel(badge)
    await newBadge.save()
    res.json(badge)
})

module.exports = {
    getBadge,
    postBadge
}
