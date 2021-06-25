
exports.up = function(knex) {
  return knex.schema
  .createTable('articles', tbl => {
      tbl.increments('article_id')
      tbl.text('title', 128).notNullable()
      tbl.text('category', 128)
      tbl.text('link', 255).notNullable()
      tbl.text('description', 255)
      tbl.integer('rank')
  })
  .createTable('users', tbl => {
      tbl.increments('user_id')
      tbl.text('username', 128)
      .unique()
      .notNullable()
      tbl.text('password')
      .notNullable()
      tbl.text('firstName', 128),
      tbl.text('lastName',128)
  })
  .createTable('saved_articles' , tbl => {
    tbl.increments('saved_id')
    tbl.integer('article_id')
    .unsigned()
    .notNullable()
    .references('article_id')
    .inTable('articles')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
    tbl.integer('user_id')
    .unsigned()
    .notNullable()
    .references('user_id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('articles')
};
