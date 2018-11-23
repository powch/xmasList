const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: { type: String, required: true },
  items: [{
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }]
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;