exports.seed = function (knex, Promise) {
  return knex('users')
    .insert([{
      email: 'ab@ab.com',
      password: 'ab',
      first_name: 'Aaron',
      last_name: 'Black',
    },
    {
      email: 'hj@hj.com',
      password: 'hj',
      first_name: 'Hyunjung',
      last_name: 'Oh',
    },
    ]);
};
