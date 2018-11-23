import { mongoose, Schema } from 'mongoose';

const personSchema = new Schema({
  name: { type: String, required: true },
  items: [{
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }]
});

const Person = mongoose.model('Person', personSchema);

export default Person;