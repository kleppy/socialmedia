const { Schema, Types } = require('mongoose');
// inst reaction schema 
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    responseBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      default: new Date(),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
// Export 
module.exports = reactionSchema;
