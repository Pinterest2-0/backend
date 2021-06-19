const db = require('../../data/db-config')

const get = () => {
    return db('articles')
}

module.exports = {
    get
}