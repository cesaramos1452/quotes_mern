import express from 'express';
import User from '../schema/UserSchema';
import bcrypt, { hash } from 'bcryptjs';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'
dotenv.config();

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  // MAKE SURE ALL FIELDS HAVE BEEN FILLED
  if (!email || !password) {
    return res.status(400).send('PLEASE ENTER ALL FIELDS');
  }

  //LOOK TO SEE IF EMAIL IS REGISTERED IN DB
  const findEmail = await User.findOne({ email: email });

  if (!findEmail) {
    return res.status(401).send('PLEASE ENTER VALID EMAIL & PASSWORD');
  }
  //CHECK FOR PROPER PASSWORD
  const passwordCheck = await bcrypt.compare(password, findEmail.password);

  if (!passwordCheck) {
    return res.status(401).send('PLEASE ENTER VALID EMAIL & PASSWORD');
  }

  //PASS A TOKEN ALONG FOR AUTHENTICATION
  try {
    const token = jwt.sign({ id: findEmail.id }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
