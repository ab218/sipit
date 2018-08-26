"use strict";

const express = require('express');
const router = express.Router();


const users = [{id: 'a1234z', userName: 'ab', email: 'ab@ab.com', password: 'ab'}];

function rando() {
    let output = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (let i = 0; i < 6; i++) {
      output += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return output;
  }

 function getUserByEmail(email) {
    const foundUser = users.find((user) => user.email === email);
    return Promise.resolve(foundUser);
  }

 function getUserById(id) {
    const foundUser = users.find((user) => user.id === id);
    return Promise.resolve(foundUser);

  }
 function getUserByUserName(userName) {
    const foundUser = users.find((user) => user.userName === userName);
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

module.exports = () => {
router.post('/log', (req, res, next) => {
    console.log('thing')
    const { email, password } = req.body;
    authenticateUser(email, password)
      .then((foundUser) => {
        if(foundUser){
        console.log('login success')
            var message = 'user authenticated'
            res.json({
              message: message,
              foundUser: results
            })
        } else {
          console.log('login fail')
        }
      });
  })
  return router;
}