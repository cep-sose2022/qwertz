const ImageModel = require("../model/imageModel");

const getImage = ((req, res) => {
    ImageModel.find({name: req.params.name}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

const postImage = (async (req, res) => {
    const image = req.body
    const newImage = new ImageModel(image)
    await newImage.save()
    res.json(image)
})

module.exports = {
    getImage,
    postImage
}
