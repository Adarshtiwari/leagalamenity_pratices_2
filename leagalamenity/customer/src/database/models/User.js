const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    user: Object,
    email: {
      type: String,
      unique: true, // `email` must be unique
    },
    password: String,
    salt: String,
    status: String,
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret.salt;
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

module.exports = mongoose.model("user", UserSchema);
