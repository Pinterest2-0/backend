const db = require('../../data/db-config')

const getSavedArticle = () => {
    return db('saved_articles')
    .join('articles', 'saved_articles.article_id' , 'articles.article_id')
    .join('users', 'saved_articles.user_id' , 'users.user_id')
    .select('saved_id','saved_articles.article_id' , 'saved_articles.user_id' , 'articles.*' , 'users.username')

}

const getSavedById = (saved_id) => {
    return db('saved_articles')
    .join('articles', 'saved_articles.article_id' , 'articles.article_id')
    .join('users', 'saved_articles.user_id' , 'users.user_id')
    .select('saved_id','saved_articles.article_id' , 'saved_articles.user_id' , 'articles.*' , 'users.username')
    .where({saved_id})
    .first()
}

const addSaved = async (saved) => {
    const [id] = await db('saved_articles').insert(saved)

    return getSavedById(id)
}

module.exports = {
    getSavedArticle,
    getSavedById,
    addSaved
}