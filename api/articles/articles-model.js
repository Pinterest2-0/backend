const db = require('../../data/db-config')

const getAll = () => {
    return db('articles')
}

const getById = (article_id) => {
    return db('articles').where({article_id}).first()
}

const getByCat = (category) => {
    return db('articles').where({category}).first()
}

const insert = async (article) => {
    const [id] = await db('articles').insert(article)
    return getById(id)
}

const update = async (article_id , changes) => {
    await db('articles').where({article_id}).update(changes)

    return getById(article_id)
}

const remove = (article_id) => {
    return db('articles').where({article_id}).del()
}

module.exports = {
    getAll,
    getById,
    getByCat,
    insert,
    update,
    remove
}