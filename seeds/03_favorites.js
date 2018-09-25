exports.seed = function (knex, Promise) {
  return knex('favorites')
    .insert([{
      title: 'Revolver',
      body: 'Mmmmmmmmmm coffee',
      url: 'dX6y4zA-1AtWsYnT4AZXNg',
      user_id: 1,
      image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/cxiphoZUdDV3gLKCiZEllg/o.jpg',
    },
    {
      title: 'Timbertrain Coffee Roasters',
      body: 'Mmmmmmmmmm tea',
      url: 'MTrkGD8e4LRxTpUiYek9aQ',
      user_id: 2,
      image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/mCO__j9Pvsx7_kEDjBa6hQ/o.jpg',
    },
    ]);
};
