const GifModel = require("../model/gifModel");

const getGif = ((req, res) => {
    GifModel.find({ name: req.params.name }, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})


const postGif = (async (req, res) => {
    const gif = req.body
    const newGif = new GifModel(gif)
    await newGif.save()
    res.json(gif)
})

module.exports = {
    getGif,
    postGif
}
