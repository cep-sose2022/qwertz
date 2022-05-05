const asyncHandler = require('express-async-handler')
const Data = require('../model/dataModel')

// @desc    Get data
// @route   GET /api/data
// @access  Private
const getData = asyncHandler(async (req, res) => {
    const datas = await Data.find()

    console.log(req.body)
    res.status(200).json(datas)
})

// @desc    set data
// @route   POST /api/data
// @access  Private
const setData = asyncHandler(async (req, res) => {
const datas = await Data.create({
    text: req.body.text
})

    res.status(200).json(datas)
})

// @desc    Update data
// @route   PUT /api/data/:id
// @access  Private
const updateData = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update data ${req.params.id}` })
})

// @desc    delete data
// @route   DELETE /api/data/:id
// @access  Private
const deleteData = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete data ${req.params.id}` })
})

module.exports = {
    getData,
    setData,
    updateData,
    deleteData,
}