const Article = require('./articles-model')

const checkArticleId = (req, res, next) => {
    const { id } = req.params;

    Article.getById(id)
    .then( article => article ? next() : res.status(404).json({ message: `article with Id: ${id} not found` }) )
    .catch( err => console.log(err) )
}

const validateArticle = (req, res, next) => {
    const { title , link } = req.body
    if( !title || title === '' || typeof title !== 'string' ) {
        res.status(400).json({ message: 'invalid title' })
    } else if ( !link || link === '' || typeof link !=='string' ) {
        res.status(400).json({ message: 'invalid link' })
    } else {
        next()
    }
}

module.exports = {
    checkArticleId,
    validateArticle
}