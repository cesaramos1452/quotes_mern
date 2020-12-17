import express from 'express';
import User from '../schema/UserSchema';
import bcrypt from 'bcryptjs';

const router = express.Router();

router.post('/', async (req, res) => {
  const { username, password, email } = req.body;

  //MAKE SURE ALL NEEDED INFO IS FILLED IN
  if (!username || !password || !email) {
    return res.status(400).send('PLEASE ENTER ALL FIELDS!');
  }

  //LOOK FOR EMAIL IN DATABASE
  const checkEmail = await User.findOne({ email: email });

  //MAKE SURE EMAIL ISN'T IN DB ALREADY
  if (checkEmail) {
    return res.status(400).send('EMAIL ALREADY EXISTS!');
  }

  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);


  //Create user with data coming in from front end
  const newUser = new User({
    username: username,
    password: hashPassword,
    email: email,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json({
      user: {
        id: savedUser.id,
        username: savedUser.username,
        email: savedUser.email,
      },
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

export default router;
