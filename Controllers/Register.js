const express = require('express')
const router = express.Router()
const UserModel = require('../Models/UserModel')
const bcrypt = require ('bcrypt');


const checkIfExist = (req, res, next)=>{
    UserModel.find({email:req.body.email, Arobase:req.body.Arobase}).then(data=>{
        if(data.length){
            res.status(400).json('Already Exist')
        }else{
            next()
        }
    })
}
router.post('/', checkIfExist, (req, res)=>{
    const NewUser = new UserModel(req.body)
    const salt = 10
    console.log(bcrypt.hash(password, salt)) 
    NewUser.save().then(data=>{
        res.status(200).json(data)
    })
})


module.exports = router