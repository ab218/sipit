const express = require('express');

const router = express.Router();

module.exports = (knex) => {
  router.post('/', (req, res) => {
    knex('users')
      .select()
      .where('email', '=', req.body.email)
      .where('password', '=', req.body.password)
      .then((results) => {
        if (results.length < 1) {
          res.json({
            message: 'failed login',
          });
        } else {
          res.json({
            user: results,
            message: 'successful login',
          });
        }
      })
      .catch((e) => {
        res.json({ message: `${e}` });
      });
  });
  return router;
};
