exports.seed = function (knex, Promise) {
  return knex('favorites')
    .insert([{
      title: 'Revolver',
      body: 'Mmmmmmmmmm coffee',
      url: 'dX6y4zA-1AtWsYnT4AZXNg',
      user_id: 1,
    },
    {
      title: 'Timbertrain Coffee Roasters',
      body: 'Mmmmmmmmmm tea',
      url: 'MTrkGD8e4LRxTpUiYek9aQ',
      user_id: 2,
    },
    ]);
};
