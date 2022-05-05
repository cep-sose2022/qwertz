const express = require('express')
const router = express.Router()
const {getZitate} = require('../controllers/zitatController')

// router.route('/').get(getData).post(setData)
// router.route('/:id').put(updateData).delete(deleteData)

// liefert alle Zitate zurück
router.route('/getZitate').get(getZitate)
// liefert alle Badgets zurück
// router.route('/getBadges').get(getAllBadges)
// // leiefert die Daten zu einem Modus aus einem Badge zurück
// router.route('/getBadges/:id/:modiName').get(getOneModiFromBadge)

module.exports = router
