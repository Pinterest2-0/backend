const router = require('express').Router()
const Article = require('./articles-model')

router.get('/', (req, res) => {
    Article.get()
    .then( articles => res.status(200).json(articles) )
    .catch( err => {
        console.log(err)
        res.status(500).json({ message: 'Could not get articles' })
    } )
})

module.exports = router;