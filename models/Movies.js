const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  slug: {
    type: String
  },
  thumbnail: {
    type: String
  },
  company: {
    type: String
  },
  stars: {
    type: Number
  },
  year: {
    type: Number
  },
  length: {
    type: Number
  },
  genre: {
    type: Array
  },
  link: {
    type: String
  },
  type: {
    type: String
  },

  createdAt: {
    type: Date,
    default: Date.now()
  },
  favorites: {
    type: Boolean,

  },
  likes: {
    type: Number,
    
  }
});

module.exports = mongoose.model("Movie", MovieSchema);
