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

module.exports = {
    getBadge
}
