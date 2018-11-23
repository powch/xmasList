import { mongoose, Schema } from 'mongoose';

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

export default Item;