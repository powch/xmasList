const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  item: { type: String, required: true },
  url: {
    type: String,
    required: true,
    match:
      '/^((http[s]?|ftp):/)?/?([^:/s]+)((/w+)*/)([w-.]+[^#?s]+)(.*)?(#[w-]+)?$/'
  },
  price: { type: Number, required: true }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;