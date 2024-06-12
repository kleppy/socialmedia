const router = require('express').Router();
const {
  singleThought,
  newThought,
  allThoughts,
  removeThought,
  updateThought,
  removeThoughtReact,
  newReaction,
} = require('../../controllers/thoughtController');

router.route('/').get(allThoughts).post(newThought);

router
  .get(singleThought)
  .route('/:thoughtId')
  .put(updateThought)
  .delete(removeThought);

router.route('/:thoughtId/reactions').post(newReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(removeThoughtReact);
// export 
module.exports = router;
