// Update with your config settings.
require('dotenv').config();


module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      user: 'chagi',
      password: 'chagilove',
      database: 'sipit',
      port: 5432,
      ssl: false,
    },
  },

  staging: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

};
