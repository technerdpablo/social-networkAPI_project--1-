const router = require('express').Router();

// fetch methods for controllers
const {
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

router.route('/').get(getThought).post(createThought);
//  define routes for the methods
router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

router.route('/:thoughtId/reactions')
.post(createReaction);

router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);


module.exports = router;
