import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const countrySchema = new Schema({
  name: String,
  photos: { type: Array, default: [] },
  cityIds: [{ type: mongoose.Schema.ObjectId, ref: 'City' }],
  createdAt: { type: Date, default: Date.now },
});

countrySchema.instance.getBalance = function () {
  return 0;
};

module.exports = mongoose.model('Country', countrySchema);
