const users = [{
  id: 'a1234z', userName: 'ab', email: 'ab@ab.com', password: 'ab',
}];

// function rando() {
//   let output = '';
//   const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//   for (let i = 0; i < 6; i++) {
//     output += alphabet[Math.floor(Math.random() * alphabet.length)];
//   }
//   return output;
// }

function getUserByEmail(email) {
  const foundUser = users.find(user => user.email === email);
  return Promise.resolve(foundUser);
}

function getUserById(id) {
  const foundUser = users.find(user => user.id === id);
  return Promise.resolve(foundUser);
}
function getUserByUserName(userName) {
  const foundUser = users.find(user => user.userName === userName);
  return Promise.resolve(foundUser);
}

function authenticateUser(email, password) {
  return getUserByEmail(email)
    .then((foundUser) => {
      if (foundUser && foundUser.password === password) {
        return foundUser;
      }
      return undefined;
    });
}

module.exports = {
  getUserByEmail,
  getUserById,
  getUserByUserName,
  authenticateUser,
};
