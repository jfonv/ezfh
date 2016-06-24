import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: String,
  age: Number,
  gender: String,
  balance: Number,
  cityIds: [{ type: mongoose.Schema.ObjectId, ref: 'City' }],
  photo: String,
});

module.exports = mongoose.model('Person', personSchema);
