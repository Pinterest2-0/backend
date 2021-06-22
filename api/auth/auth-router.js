const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {jwtSecret}  = require('../../config/secret')
const {checkCredentials} = require('./auth-middleware')
const Users = require('./auth-model')

router.post('/register', checkCredentials, (req, res) => {
    const user = req.body
    // const rounds = process.env.ROUNDS || 8
    const hash = bcrypt.hashSync(user.password ,8)

    user.password = hash

    Users.add(user)
    .then( saved => res.status(200).json(req.body) )
    .catch( err => {
        console.log(err)
        res.status(500).json({ messgae: "Could not register user" })
    } )

})

router.post('/login', checkCredentials, (req, res) => {
    const { username , password  } = req.body

    Users.findBy({username})
    .then(([user]) => {
        if (user && bcrypt.compareSync( password , user.password )) {
            const token = generateToken(user)
            res.status(200).json({ message: `Welcome ${username}`, token })
        } else {
            res.status(401).json({ message: 'Invalid Credentials' })
        }
    } )
    .catch( err => {
        console.log(err)
        res.status(500).json({ message: "Could not Login User" })
    } )
})

const generateToken = (user) => {
    const payload = {
        subject: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName
    }

    const options = {
        expiresIn: "1hr"
    }
    return jwt.sign(payload , jwtSecret , options)
}

module.exports = router