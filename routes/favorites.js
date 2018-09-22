const express = require('express');

const router = express.Router();

module.exports = (knex) => {
  router.get('/:id', (req, res) => {
    knex.select('*').from('favorites')
      .where('user_id', '=', req.params.id)
      .then((results) => {
        res.json(results);
      })
      .catch((e) => {
        res.status(500).send(e);
      });
  });
  return router;
};
