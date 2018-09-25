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

  router.post('/new', (req, res) => {
    const {
      email, password, first_name, last_name,
    } = req.body;
    knex('users')
      .select()
      .where('email', '=', email)
      .then((results) => {
        if (results.length > 0) {
          res.json({
            message: 'Name taken',
          });
        } else {
          knex('users')
            .insert({
              email,
              password,
              first_name,
              last_name,
            })
            .then(() => {
              knex('users')
                .select()
                .where('email', '=', email)
                .then((result) => {
                  res.json({
                    user: result,
                    message: 'successful signup',
                  });
                });
            });
        }
      })
      .catch((e) => {
        res.json({ message: `${e}` });
      });
  });
  return router;
};
