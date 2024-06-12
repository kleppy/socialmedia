
const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  updateUser,
  createUser,
  addFriend,
  deleteUser,
  deleteFriend
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

// single 
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);
