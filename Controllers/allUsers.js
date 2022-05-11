const express = require('express')
const router = express.Router()
const UserModel = require('../Models/UserModel')
const UserModel = require('../Models/UserModel')
const passport = require('../config/passport')


router.get('/', 
passport.authenticate('local'),
(req, res) => {
  if (req.user) {
    req.logIn(req.user, (err) => {
        UserModel.find({}).exec().then(data=>{
            res.status(200).json(data)
        })
      })
    }else{
      res.json("eh no")
    }
})

router.get('/tl', (req, res)=>{

})

module.exports = router