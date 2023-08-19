const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventSchema = new Schema(
  {
    date: String,
    Address: Object,
    eventor_name: String,
    content: Object,
    img: String,
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

module.exports = mongoose.model("Event", EventSchema);
