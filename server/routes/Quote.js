import express from 'express';
import Quotes from '../schema/QuoteSchema';
import auth from '../middleware/verify';
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
  let newQuote = req.body
  let quotes = new Quotes(newQuote);
  try {
     await quotes.save();
    res.status(201).json(quotes);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

export default router;
