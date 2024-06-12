// router
const router = require('express').Router();
// methods allowed 
const {
  allUsers,
  singleUser,
  updateUser,
  newUser,
  newFriend,
  removeUser,
  removeFriend
} = require('../../controllers/userController');
// define route new and all user 
router.route('/').get(allUsers).post(newUser);

// getsingle put delete 
//router.route('/:userId').get(singleUser).put(updateUser).delete(removeUser);

router.route('/:userId/friends/:friendId').post(newFriend).delete(removeFriend);
