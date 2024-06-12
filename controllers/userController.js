// define User model 
const User = require('../models/User');
// define Thought Model 
const Thought = require('../models/Thought');
//exports
module.exports = {
  allUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  singleuser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .populate('thoughts')
      .populate('friends')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'User ID does not exist' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  newUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'User Id does not exist' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // remove user 
  removeUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          //BONUS: Remove a user's associated thoughts when deleted.
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() => res.json({ message: 'Deleted' }))
      .catch((err) => res.status(500).json(err));
  },

  // add a friend
  newFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'Friend ID does not exist' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

// remove friend
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId }  },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'Friend ID does not exist' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};
