
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
     table.increments('id')
     table.string('email').unique().notNull()
     table.string('username').unique().notNull()
     table.string('passwordDigest').notNull()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
