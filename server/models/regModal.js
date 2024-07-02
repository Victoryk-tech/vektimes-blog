const mongoose = require("mongoose");

const registerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a name"],
    },

    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const RegModal = mongoose.model("RegModal", registerSchema); //product model

module.exports = RegModal;
