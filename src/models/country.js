import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const countrySchema = new Schema({
  name: String,
  balance: Number,
  photos: { type: Array, default: [] },
  cityIds: [{ type: mongoose.Schema.ObjectId, ref: 'City' }],
  createdAt: { type: Date, default: Date.now },
});

countrySchema.methods.getBalance = function () {
  return 4963;
};


module.exports = mongoose.model('Country', countrySchema);
