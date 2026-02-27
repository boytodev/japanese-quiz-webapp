const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  group: {
    type: String,
    required: true
  },
  school: {
    type: String,
    default: ''
  },
  useJapanese: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Survey", surveySchema);