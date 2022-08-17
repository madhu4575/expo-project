const Expo = require('../models/expo')

const expoController = {} 

expoController.list = (req,res) => {
    // console.log(req.user._id)
    Expo.find({user:req.user._id})
        .then((expo) => {res.json(expo)})
        .catch((err) => {res.json(err.message)})
}

expoController.create = (req,res) => {
    console.log(req.user._id)
    const body = req.body
    const expo = new Expo(body)
    expo.user = req.user._id
    expo.save()
        .then((expo) => {res.json(expo)})
        .catch((err) => {res.json(err)})
}

expoController.show = (req, res) => {
    console.log(req.user.role)
    const id = req.params.id
    Expo.findOne({ _id: id, user: req.user._id })
        .then((expo) => {
            if (expo) {
                res.json(expo)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

expoController.update = (req,res) => {
    const body = req.body
    const id = req.params.id
    Expo.findOneAndUpdate({_id:id,user:req.user._id},body,{new:true,runValidators:true})
        .then((expo) => {
            res.json(expo)
        })
        .catch((err) => {
            res.json(err.message)
        })
}

expoController.destroy = (req,res) => {
    const id = req.params.id
    Expo.deleteById({_id:id,user:req.user._id})
        .then((expo) => {
            res.json(expo)
        })
        .catch((err) => {
            res.json(err.message)
        })
}

module.exports = expoController