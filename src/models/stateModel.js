const mongoose = require('mongoose');

const StateSchema = new mongoose.Schema({
  name: String,
  uf: String,
}, {
  timestamps: true,
});
module.exports = mongoose.model('State', StateSchema);
