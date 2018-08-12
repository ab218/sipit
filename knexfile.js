// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      user: 'chagi',
      password: 'chagilove',
      database: 'sipit',
      port: 5432,
      ssl: false
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'sipit',
      user:     'chagi',
      password: 'chagilove'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'sipit',
      user:     'chagi',
      password: 'chagilove'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
