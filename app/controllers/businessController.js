const Business = require('../models/business')

const businessController = {}

businessController.list = (req, res) => {
    Business.find({ user: req.user._id })
        .then((business) => {
            res.json(business)
        })
        .catch((err) => {
            res.json(err)
        })
}

businessController.show = (req, res) => {
    const id = req.params.id
    Business.findOne({ _id: id, user: req.user._id })
        .then((business) => {
            if (business) {
                res.json(business)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

businessController.create = (req,res) => {
    // console.log(req.expo._id)
    const body = req.body
    // const id = req.params.expoId
    const business = new Business(body)
    business.user = req.user._id
    business.save()
        .then((business) => {res.json(business)})
        .catch((err) => {res.json(err.message)})
}

businessController.update = (req,res) => {
    const body = req.body
    Business.findOneAndUpdate({ _id: id, user: req.user._id }, body, { new: true, runValidators: true })
        .then((business) => {
            res.json(business)
        })
        .catch((err) => {
            res.json(err)
        })
}

businessController.destory = (req, res) => {
    const id = req.params.id
    Business.findOneAndDelete({ _id: id, user: req.user._id })
        .then((business) => {
            res.json(business)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports = businessController