const express = require('express');

const router = express.Router();

module.exports = (knex) => {
  router.get('/', (req, res) => {
    knex.select('*').from('users')
      .then((results) => {
        res.json(results);
      })
      .catch((e) => {
        res.status(500).send(e);
      });
  });
  return router;
};
