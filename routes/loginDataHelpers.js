const users = [{
  id: 'a1234z', userName: 'ab', email: 'ab@ab.com', password: 'ab',
}];

export async function getUserByEmail(email) {
  const foundUser = users.find(user => user.email === email);
  return foundUser;
}

export async function getUserById(id) {
  const foundUser = users.find(user => user.id === id);
  return foundUser;
}
export async function getUserByUserName(userName) {
  const foundUser = users.find(user => user.userName === userName);
  return foundUser;
}

export async function authenticateUser(email, password) {
  const foundUser = await getUserByEmail(email);
  if (foundUser && foundUser.password === password) {
    return foundUser;
  }
  return undefined;
}
