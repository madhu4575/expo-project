const jwt = require('jsonwebtoken')
const User = require('../models/user')
const authenicateUser = (req,res,next) => { 
    const token = req.header('Authorization').split(' ')[1]
    let tokenData
    try{
        tokenData = jwt.verify(token,'expo')
        User.findById(tokenData._id)
            .then((user) => {
                req.user = user
                next()
            })
            .catch((err) => {
                res.status(401).json(err)
            })
    }catch (e){
        res.status(401).json(e)
    }
}

module.exports = {
    authenicateUser
}