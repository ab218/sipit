const express = require('express');

const router = express.Router();

const users = [{
  id: 'a1234z', userName: 'ab', email: 'ab@ab.com', password: 'ab',
}];

async function getUserByEmail(email) {
  const foundUser = users.find(user => user.email === email);
  return foundUser;
}

async function authenticateUser(email, password) {
  const foundUser = await getUserByEmail(email);
  if (foundUser && foundUser.password === password) {
    return foundUser;
  }
  return undefined;
}
router.post('/', async (req, res, next) => {
  try {
    console.log('thing');
    const { email, password } = req.body;
    const foundUser = await authenticateUser(email, password);
    if (foundUser) {
      console.log('foundUser');
      const message = 'user authenticated';
      res.json({
        message,
        name: foundUser,
      });
    } else {
      res.status(401).json({ message: 'User not found' });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;


// /users/me
