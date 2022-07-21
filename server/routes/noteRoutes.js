const router = require("express").Router();
const {addingNote, gettingNote, gettingIdNote, edittingNote, deletingNote} = require("../controller/noteController")

router.post('/add_note', addingNote);
router.get('/all_note', gettingNote);
router.get('/:id', gettingIdNote);
router.post('/:id', edittingNote);
router.delete('/:id', deletingNote)

module.exports = router;
