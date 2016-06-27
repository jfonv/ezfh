import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: String,
  photos: { type: Array, default: [] },
  // TODO: FIX THIS STUFF
  countryId: String, // { type: mongoose.Schema.ObjectId, ref: 'Country', default: null },
  personIds: [{ type: mongoose.Schema.ObjectId, ref: 'Person' }],
  balance: { type: Number, default: 0 },
  cost: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('City', citySchema);
