const ZuordnungModel = require("../model/zuordnungModel");

const getZuordnung = ((req, res) => {
    ZuordnungModel.find({id: req.params.id}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

module.exports = {
    getZuordnung
}
