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

  router.post('/add', (req, res) => {
    const { title, url, user_id } = req.body;
    knex('favorites')
      .insert({
        title,
        body: 'Mmmmmmmmmm coffee',
        url,
        user_id,
      })
      .then(() => {
        res.json({
          message: 'favorite added',
        });
      });
  });

  router.delete('/delete', (req, res) => {
    const { url, user_id } = req.body;
    knex('favorites')
      .where('url', '=', url)
      .where('user_id', '=', user_id)
      .del()
      .then(() => {
        res.json({
          message: 'favorite removed',
        });
      });
  });
  return router;
};
