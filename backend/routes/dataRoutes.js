const express = require('express')
const router = express.Router()
const {getZitate,} = require('../controllers/zitatController')
const {getAblauf,} = require('../controllers/ablaufController')
const {getBadge,} = require('../controllers/badgeController')
const {getKonversation,} = require('../controllers/konversationController')
const {getWimmelbild,} = require('../controllers/wimmelbildController')
const {getZuordnung,} = require('../controllers/zuordnungController')

// router.route('/').get(getData).post(setData)
// router.route('/:id').put(updateData).delete(deleteData)

// liefert alle Zitate zurück
// liefert alle Badgets zurück
router.route('/getZitate').get(getZitate)
router.route('/getAblauf').get(getAblauf)
router.route('/getBadge').get(getBadge)
router.route('/getKonversation').get(getKonversation)
router.route('/getWimmelbild').get(getWimmelbild)
router.route('/getZuordnung').get(getZuordnung)
// router.route('/getBadges').get(getAllBadges)
// // leiefert die Daten zu einem Modus aus einem Badge zurück
// router.route('/getBadges/:id/:modiName').get(getOneModiFromBadge)

module.exports = router