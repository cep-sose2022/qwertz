const express = require('express')
const router = express.Router()
const {getZitate, postZitat,} = require('../controllers/zitatController')
const {getBadge, postBadge,} = require('../controllers/badgeController')
const {getWimmelbild, postWimmelbild} = require('../controllers/wimmelbildController')
const {getAblauf, postAblauf} = require('../controllers/ablaufController')
const {getZuordnung} = require("../controllers/zuordnungController");
const {getKonversation, postKonversation} = require("../controllers/konversationController");
const {postMultipleChoice, getMultipleChoice} = require("../controllers/multipleChoiceController");
const {getImage, postImage} = require("../controllers/imageController");
const {getPdf, postPdf} = require("../controllers/pdfController")

// --- get Methoden ---
// liefert alle Zitate zurück
router.route('/getZitate').get(getZitate)
// liefert alle Badgets zurück
router.route('/getBadges').get(getBadge)
// liefert ein Wimmelbild anhand des namens
router.route('/getImage/:name').get(getImage)
// liefert die PDF eines Badges zurück
router.route('/getPDF/:badgeID').get(getPdf)
// liefert die Daten von einem Gamemodi zu einem Badge
router.route('/getAblaufanordnung/:badgeID/:modiID').get(getAblauf)
router.route('/getZuordnung/:badgeID/:modiID').get(getZuordnung)
router.route('/getKonversation/:badgeID/:modiID').get(getKonversation)
router.route('/getWimmelbild/:badgeID/:modiID').get(getWimmelbild)
router.route('/getMultipleChoice/:badgeID/:modiID').get(getMultipleChoice)

// --- post Methoden ---
router.route('/postKonversation').post(postKonversation)
router.route('/postAblauf').post(postAblauf)
router.route('/postBadge').post(postBadge)
router.route('/postWimmelbild').post(postWimmelbild)
router.route('/postZitat').post(postZitat)
router.route('/postMultipleChoice').post(postMultipleChoice)
router.route('/postImage').post(postImage)
router.route('/postPdf').post(postPdf)

module.exports = router
