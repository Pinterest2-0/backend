const router = require('express').Router()
const Article = require('./articles-model')

router.get('/', (req, res) => {
    Article.getAll()
    .then( articles => res.status(200).json(articles) )
    .catch( err => {
        console.log(err)
        res.status(500).json({ message: 'Could not get articles' })
    } )
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    Article.getById(id)
    .then( article => res.status(200).json(article) )
    .catch( err => {
        console.log(err)
        res.status(500).json({ message: 'Could not get specific article' })
    } )
})

router.post('/', (req, res) => {
    Article.insert(req.body)
    .then( newArticle => res.status(201).json(newArticle) )
    .catch( err => {
        console.log(err)
        res.status(500).json({ message: 'Could not post new article' })
    } )
})

router.put('/:id', (req, res) => {
    Article.update(req.params.id , req.body)
    .then( updatedArticle => res.status(200).json(updatedArticle) )
    .catch( err => {
        console.log(err)
        res.status(500).json({ message: 'Could not update article' })
    } )
})

router.delete('/:id', (req, res) => {
    Article.remove(req.params.id)
    .then( removed => removed ?  res.json(req.body) : res.status(404) )
    .catch( err => {
        console.log(err)
        res.status(500).json({ message: 'Could delete specific article' })
    } )
})

module.exports = router;