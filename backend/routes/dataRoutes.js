const express = require('express')
const router = express.Router()
const {getZitate,} = require('../controllers/zitatController')
const {getBadge,} = require('../controllers/badgeController')
const {getWimmelbild} = require('../controllers/wimmelbildController')
const {getAblauf} = require('../controllers/ablaufController')
const {getZuordnung} = require("../controllers/zuordnungController");
const {getKonversation} = require("../controllers/konversationController");

// router.route('/').get(getData).post(setData)
// router.route('/:id').put(updateData).delete(deleteData)

// liefert alle Zitate zurück
router.route('/getZitate').get(getZitate)
// liefert alle Badgets zurück
router.route('/getBadge').get(getBadge)

// liefert die Daten von einem Gamemodi zu einem Badge
router.route('/getAblaufanordnung/:id').get(getAblauf)
router.route('/getZuordnung/:id').get(getZuordnung)
router.route('/getKonversation/:id').get(getKonversation)
router.route('/getWimmelbild/:id').get(getWimmelbild)


module.exports = router
