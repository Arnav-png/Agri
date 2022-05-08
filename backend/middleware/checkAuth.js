const jwt = require('jsonwebtoken')
require('dotenv').config()


module.exports = (req, res, next) => {
    try {
        const bearerToken = req.headers.authorization.split(" ")[1]
        const verify = jwt.verify(bearerToken, process.env.JWT_SECRET)
        console.log(verify)
        next()
    } catch (error) {

        return res.status(401).json({
            status: false,
            message: 'Invalid token, Not authorised to access'
        })

    }
}