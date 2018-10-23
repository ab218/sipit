exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', (table) => {
      table.increments();
      table.string('email');
      table.string('password');
      table.string('first_name');
      table.string('last_name');
    }),
    knex.schema.createTable('cafes', (table) => {
      table.increments();
      table.integer('user_id').references('id').inTable('users').onDelete('cascade');
      table.string('coords');
      table.string('address');
      table.string('description');
      table.boolean('wifi');
      table.boolean('is_spacious');
      table.boolean('good_for_work');
      table.boolean('has_roastery');
      table.string('business_hours');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    }),
    knex.schema.createTable('reviews', (table) => {
      table.increments();
      table.string('title');
      table.string('body');
      table.string('coffee_rating');
      table.string('food_rating');
      table.string('cafe_id');
      table.integer('user_id').references('id').inTable('users').onDelete('cascade');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    }),
    knex.schema.createTable('favorites', (table) => {
      table.increments();
      table.string('title');
      table.string('body');
      table.string('url');
      table.string('image_url');
      table.float('lat');
      table.float('lng');
      table.integer('user_id').references('id').inTable('users').onDelete('cascade');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    }),
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.raw('DROP TABLE users CASCADE'),
    knex.raw('DROP TABLE cafes CASCADE'),
    knex.raw('DROP TABLE reviews CASCADE'),
    knex.raw('DROP TABLE favorites CASCADE'),
  ]);
};
