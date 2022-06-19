const PDFModel = require("../model/pdfModel");

const getPdf = ((req, res) => {
    PDFModel.find({badgeID: req.params.badgeID}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

const postPdf = (async (req, res) => {
    const pdf = req.body
    const newPdf = new PDFModel(pdf)
    await newPdf.save()
    res.json(pdf)
})

module.exports = {
    getPdf,
    postPdf
}
