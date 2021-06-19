
exports.up = function(knex) {
  return knex.schema
  .createTable('articles', tbl => {
      tbl.increments()
      tbl.text('title', 128).notNullable()
      tbl.text('category', 128)
      tbl.text('link', 255).notNullable()
      tbl.text('description', 255)
  })
  .createTable('users', tbl => {
      tbl.increments()
      tbl.text('username', 128)
      .unique()
      .notNullable()
      tbl.text('password')
      .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('articles')
};
