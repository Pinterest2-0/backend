const router = require('express').Router()
const Save = require('./saved-model')

router.get('/', (req, res) => {
    Save.getSavedArticle()
    .then( savedList => res.status(200).json(savedList) )
    .catch( err => {
        console.log(err)
        res.status(500).json({message: 'Could not get saved list'})
    } )
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    Save.getSavedById(id)
    .then( savedArticle => res.status(200).json(savedArticle) )
    .catch( err => {
        console.log(err)
        res.status(500).json({message: 'Could not get saved article'})
    } )
})

router.post('/', (req, res) => {
    Save.addSaved(req.body)
    .then( newArticle => res.status(200).json(newArticle) )
    .catch( err => {
        console.log(err)
        res.status(500).json({message: 'Could not post saved article'})
    } )
})

module.exports = router