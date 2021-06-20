const db = require('../../data/db-config')

const getAll = () => {
    return db('articles')
}

const getById = (id) => {
    return db('articles').where({id}).first()
}

const getByCat = (category) => {
    return db('articles').where({category}).first()
}

const insert = async (article) => {
    const [id] = await db('articles').insert(article)
    return getById(id)
}

const update = async (id , changes) => {
    await db('articles').where({id}).update(changes)

    return getById(id)
}

const remove = (id) => {
    return db('articles').where({id}).del()
}

module.exports = {
    getAll,
    getById,
    getByCat,
    insert,
    update,
    remove
}