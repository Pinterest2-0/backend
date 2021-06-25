const savedArticles = [
  {
    article_id: 1,
    user_id: 1
  },
  {
    article_id: 1,
    user_id: 2
  },
  {
    article_id: 3,
    user_id: 4
  },
  {
    article_id: 5,
    user_id: 5
  },
  {
    article_id: 2,
    user_id: 6
  },
  {
    article_id: 1,
    user_id: 4
  },
]


exports.savedArticles = savedArticles

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('saved_articles').insert(savedArticles)
};
