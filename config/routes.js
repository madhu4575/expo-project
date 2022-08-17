const express = require('express')
const router = express.Router()

const { authenicateUser } = require('../app/middleware/authentication')
const userController = require('../app/controllers/userController')
const expoController = require('../app/controllers/expoController')
const productController = require('../app/controllers/productController')
const enquiryController = require('../app/controllers/enquiryController')
const businessController = require('../app/controllers/businessController')

router.post('/expo-porject/users/register',userController.register)
router.post('/expo-porject/users/login',userController.login)
router.get('/expo-porject/users/account',authenicateUser,userController.account)

router.get('/expo-porject/expo-page',authenicateUser,expoController.list)
router.post('/expo-porject/expo-page',authenicateUser,expoController.create)
router.get('/expo-porject/expo-page/:id',authenicateUser,expoController.show)
router.put('/expo-porject/expo-page/:id',authenicateUser,expoController.update)
router.delete('/expo-porject/expo-page/:id',authenicateUser,expoController.destroy)

router.get('/expo-project/business-info',authenicateUser,businessController.list)
router.post('/expo-project/business-info',authenicateUser,businessController.create)
router.get('/expo-project/business-info/:id',authenicateUser,businessController.show)
router.put('/expo-project/business-info/:id',authenicateUser,businessController.update)
router.delete('/expo-project/business-info/:id',authenicateUser,businessController.destory)

router.get('/expo-project/product-info',authenicateUser,productController.list)
router.post('/expo-project/product-info',authenicateUser,productController.create)
router.get('/expo-project/product-info/:id',authenicateUser,productController.show)
router.put('/expo-project/product-info/:id',authenicateUser,productController.update)
router.delete('/expo-project/product-info/:id',authenicateUser,productController.destory)

router.get('/expo-porject/product/list',authenicateUser,enquiryController.list)
router.post('/expo-porject/product/enquiry',authenicateUser,enquiryController.create)
router.get('/expo-porject/product/enquiry/:id',authenicateUser,enquiryController.show)

module.exports = router








