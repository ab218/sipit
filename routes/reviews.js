const express = require('express');

const router = express.Router();

module.exports = (knex) => {
  router.get('/', (req, res) => {
    knex('reviews')
      .select('*')
      .then((results) => {
        res.json(results);
      })
      .catch((e) => {
        res.status(500).send(e);
      });
  });

  router.get('/:id', (req, res) => {
    knex('reviews')
      .join('users', 'reviews.user_id', '=', 'users.id')
      .select(
        'reviews.title',
        'reviews.body',
        'reviews.cafe_id',
        'reviews.food_rating',
        'reviews.coffee_rating',
        'reviews.created_at',
        'users.email',
        'users.first_name',
        'users.last_name',
      )
      .from('reviews')
      .where('cafe_id', '=', req.params.id)
      .then((results) => {
        res.json(results);
      })
      .catch((e) => {
        res.status(500).send(e);
      });
  });

  return router;
};
