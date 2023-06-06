const jwt = require('jsonwebtoken');

// Set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

const authMiddleware = (req, res, next) => {
  // Allow token to be sent via req.query or headers
  let token = req.query.token || req.headers.authorization;

  if (req.headers.authorization) {
    // Extract token from the "Bearer <token>" format
    token = token.split(' ')[1];
  }

  if (!token) {
    return res.status(400).json({ message: 'You have no token!' });
  }

  try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
    next();
  } catch (error) {
    console.log('Invalid token:', error.message);
    return res.status(400).json({ message: 'Invalid token!' });
  }
};

const signToken = ({ username, email, _id }) => {
  const payload = { username, email, _id };
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};

module.exports = {
  authMiddleware,
  signToken,
};
