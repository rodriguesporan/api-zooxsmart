const mongoose = require('mongoose');
const { Schema } = mongoose;

const CitySchema = new mongoose.Schema({
  name: String,
  state: { type: Schema.Types.ObjectId, ref: 'State' },
}, {
  timestamps: true,
});
module.exports = mongoose.model('City', CitySchema);
