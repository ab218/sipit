exports.seed = function (knex, Promise) {
  return knex('favorites')
    .insert([{
      title: 'Delicious Coffee',
      body: 'Mmmmmmmmmm coffee',
      url: 'abcde',
      user_id: 1,
    },
    {
      title: 'Delicious tea',
      body: 'Mmmmmmmmmm tea',
      url: 'efghi',
      user_id: 2,
    },
    ]);
};
