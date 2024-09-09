// models/Item.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  host: { type: String, required: true },
  status: { type: String, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model('Item', itemSchema);