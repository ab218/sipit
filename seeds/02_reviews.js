exports.seed = function (knex, Promise) {
  return knex('reviews')
    .insert([{
      title: 'Delicious Coffee',
      body: 'Mmmmmmmmmm coffee',
      coffee_rating: 5,
      food_rating: 3,
    },
    {
      title: 'Delicious tea',
      body: 'Mmmmmmmmmm tea',
      coffee_rating: 4,
      food_rating: 1,
    },
    ]);
};
