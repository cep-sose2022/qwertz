const express = require('express')
const router = express.Router()
const {getZitate, postZitat,} = require('../controllers/zitatController')
const {getBadge, postBadge,} = require('../controllers/badgeController')
const {getWimmelbild, postWimmelbild} = require('../controllers/wimmelbildController')
const {getAblauf, postAblauf} = require('../controllers/ablaufController')
const {getZuordnung} = require("../controllers/zuordnungController");
const {getKonversation, postKonversation} = require("../controllers/konversationController");

// router.route('/').get(getData).post(setData)
// router.route('/:id').put(updateData).delete(deleteData)


// --- get Methoden ---
// liefert alle Zitate zurück
router.route('/getZitate').get(getZitate)
// liefert alle Badgets zurück
router.route('/getBadge').get(getBadge)

// liefert die Daten von einem Gamemodi zu einem Badge
router.route('/getAblaufanordnung/:badgeID/:modiID').get(getAblauf)
router.route('/getZuordnung/:badgeID/:modiID').get(getZuordnung)
router.route('/getKonversation/:badgeID/:modiID').get(getKonversation)
router.route('/getWimmelbild/:badgeID/:modiID').get(getWimmelbild)

// post Methoden
router.route('/postKonversation').post(postKonversation)
router.route('/postAblauf').post(postAblauf)
router.route('/postBadge').post(postBadge)
router.route('/postWimmelbild').post(postWimmelbild)
router.route('/postZitat').post(postZitat)

module.exports = router
