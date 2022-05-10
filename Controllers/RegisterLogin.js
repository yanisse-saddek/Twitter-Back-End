const express = require('express')
const router = express.Router()
const UserModel = require('../Models/UserModel')

router.post('/register', checkIfExist,  (req, res)=>{
    const NewUser = new UserModel(req.body)
    NewUser.save()
})


module.exports = router