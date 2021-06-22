const checkCredentials = (req, res, next) => {
    const { username , password } = req.body

    if(username && password) {
        next()
    } else {
        res.status(422).json({ message: 'Please enter credentials' })
    }
}

module.exports = {
    checkCredentials
}