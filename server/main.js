import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import signup from './routes/SignUp';
import login from './routes/Login';
import quotes from './routes/Quote';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Parse incoming JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handles Access-Control-Allow-Origin
app.use(cors());

// set up routes through middleware
app.use('/signup', signup);
app.use('/login', login);
app.use('/quotes', quotes);

// make sure server is running
app.listen(PORT, () => console.log(`Listening @ port ${PORT}...`));

// Connect to Mongo db
mongoose.connect(process.env.DB, { useUnifiedTopology: true }, () =>
  console.log('CONNECTED TO MONGO')
);

app.post('/quote', async (req, res) => {
  const quote = new Quotes({
    quote: req.body.quote,
  });
  try {
    const savedQuote = await quote.save();
    res.json(savedQuote);
  } catch (error) {
    res.json(error.message);
  }
});
