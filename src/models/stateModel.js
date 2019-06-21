const mongoose = require('mongoose');
const { Schema } = mongoose;

const StateSchema = new mongoose.Schema({
  name: String,
  uf: String,
  cities: [{ type: Schema.Types.ObjectId, ref: 'City' }],
}, {
  timestamps: true,
});
module.exports = mongoose.model('State', StateSchema);
