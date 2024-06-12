const router = require('express').Router();
const {
  getSingleThought,
  createThought,
  getThoughts,
  deleteThought,
  updateThought,
  removeThoughtReaction,
  createReaction,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

router
  .get(getSingleThought)
  .route('/:thoughtId')
  .put(updateThought)
  .delete(deleteThought);

router.route('/:thoughtId/reactions').post(createReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(removeThoughtReaction);
// export 
module.exports = router;
