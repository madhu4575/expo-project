const Enquiry = require('../models/enquiry')

const enquiryController = {}

enquiryController.list = (req, res) => {
    Enquiry.find({ user: req.user._id})
        .then((enquiry) => {
            res.json(enquiry)
        })
        .catch((err) => {
            res.json(err)
        })
}

enquiryController.create = (req, res) => {
    const body = req.body
    const enquiry = new Enquiry(body)
    enquiry.user = req.user._id
    enquiry.product = req.params.id 
    enquiry.business = req.business._id
    enquiry.save()
        .then((enquiry) => {
            res.json(enquiry)
        })
        .catch((err) => {
            res.json(err)
        })
}

enquiryController.show = (req, res) => {
    const id = req.params.id
    Enquiry.findOne({ _id: id, user: req.user._id })
        .then((enquiry) => {
            if (enquiry) {
                res.json(enquiry)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports = enquiryController