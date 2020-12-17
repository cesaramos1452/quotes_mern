import jwt from 'jsonwebtoken';

function auth(req, res, next) {
  //Checks for token from the frontend
  const token = req.header('auth-token');

  // CHECK TO MAKE SURE TOKEN EXISTS
  if (!token) {
    return res.status(401).send('UNAUTHORIZED');
  }

  try {
    //VERIFY THAT THE TOKEN IS VERIFIED
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

export default auth;
