exports.up = function (knex, Promise) {
    return Promise.all([
      knex.schema.createTable('users', function (table) {
        table.increments();
        table.string('first_name');
        table.string('last_name');
      }),
      knex.schema.createTable('cafes', function (table) {
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
      knex.schema.createTable('reviews', function (table) { 
        table.increments();
        table.string('title');
        table.string('body');
        table.string('coffee_rating');
        table.string('food_rating');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      }),
      knex.schema.createTable('cafe_pictures', function (table) {
        table.increments();
        table.string('uri').notNullable();
        table.integer('user_id').references('id').inTable('users').onDelete('cascade');
        table.integer('cafe_id').references('id').inTable('cafes').onDelete('cascade');
        table.timestamp('created_at').defaultTo(knex.fn.now());
      }),
      knex.schema.createTable('review_pictures', function (table) {
        table.increments();
        table.string('uri').notNullable();
        table.integer('user_id').references('id').inTable('users').onDelete('cascade');
        table.integer('review_id').references('id').inTable('reviews').onDelete('cascade');
        table.timestamp('created_at').defaultTo(knex.fn.now());
      }),
    ])
  };
  
  exports.down = function (knex, Promise) {
    return Promise.all([
      knex.raw('DROP TABLE users CASCADE'),
      knex.raw('DROP TABLE cafes CASCADE'),
      knex.raw('DROP TABLE reviews CASCADE'),
      knex.raw('DROP TABLE cafe_pictures CASCADE'),
      knex.raw('DROP TABLE review_pictures CASCADE'),
    ])
  };