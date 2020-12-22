import mongoose from 'mongoose';
const { Schema } = mongoose;

const moodSchema = new Schema({
  quote: String,
  date: { type: Date, default: new Date() },
  author: String,
  creator: String,
  selectedFile: String,
});

export default mongoose.model('Quotes', moodSchema);
