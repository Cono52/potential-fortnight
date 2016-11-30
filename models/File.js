var mongoose = require('mongoose');

var FileSchema = new mongoose.Schema({
  data: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('File', FileSchema);
