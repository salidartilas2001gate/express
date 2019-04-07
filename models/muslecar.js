var mongoose = require('mongoose');
var heroShema = mongoose.Schema({
  title: String,
  model: {
    type: String,
    unique: true,
    required: true
  },
  avatar: String,
  desc: String,
  created:{
    type: Date,
    default: Date.now()
  }
})

module.exports.MusleCar = mongoose.model("MusleCar", heroShema)
