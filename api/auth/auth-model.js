const db = require('../../data/db-config')
const { getById } = require('../articles/articles-model')

const getAll = () => {
    return db("users")
}

const getBy = (filter) => {
    return db("users").where(filter)
}

const getById = (id) => {
    return db("users").where({id}).first()
}

const add = async (user) => {
    const [id] = await db('users').insert(user)
    return getById(id)
}

module.exports = {
    getAll,
    getBy,
    getById,
    add
}