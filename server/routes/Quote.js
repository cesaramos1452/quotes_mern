import express from 'express';
import Quotes from '../schema/QuoteSchema';
import auth from '../middleware/verify';
import mongoose from 'mongoose';
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const quotes = await Quotes.find();
    res.status(200).json(quotes);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

router.post('/', async (req, res) => {
  const { quote, author, creator } = req.body;
  if (!quote || !author || !creator) {
    return res.status(400).json({ msg: 'Please Enter All Fields!' });
  }
  let newQuote = req.body;
  let quotes = new Quotes(newQuote);
  try {
    await quotes.save();
    return res.status(201).json(quotes);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

router.patch('/:id', async (req, res) => {
  const { id: _id } = req.params;
  const updatedQuote = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(400).send('NO POST FOUND');
  }
  try {
    const quote = await Quotes.findByIdAndUpdate(_id, updatedQuote, {
      new: true,
      useFindAndModify: false,
    });
    return res.json(quote);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(400).send('NO POST FOUND');
  }
  try {
    await Quotes.findByIdAndDelete(_id);
    res.json({ msg: 'Post has been deleted' });
  } catch (error) {
    console.log(error.message);
  }
});

export default router;
