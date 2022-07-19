const router = require("express").Router();
const {addingNote, gettingNote} = require("../controller/noteController")

router.post('/add_note', addingNote)
router.get('/all_note', gettingNote)

module.exports = router;
