exports.seed = function (knex, Promise) {
  return knex('reviews')
    .insert([{
      title: 'Delicious Coffee',
      body: 'Mmmmmmmmmm coffee',
      coffee_rating: 5,
      food_rating: 3,
      cafe_id: 'dX6y4zA-1AtWsYnT4AZXNg',
      user_id: 1,
    },
    {
      title: 'Delicious tea',
      body: 'Mmmmmmmmmm tea',
      coffee_rating: 4,
      food_rating: 1,
      cafe_id: 'dX6y4zA-1AtWsYnT4AZXNg',
      user_id: 2,
    },
    ]);
};
