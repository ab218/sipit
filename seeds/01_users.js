exports.seed = function (knex, Promise) {
  return knex('users')
    .insert([{
      first_name: 'Aaron',
      last_name: 'Black',
    },
    {
      first_name: 'Hyunjung',
      last_name: 'Oh',
    },
    ]);
};
