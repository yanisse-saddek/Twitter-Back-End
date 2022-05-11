const express = require('express')
const router = express.Router()
const UserModel = require('../Models/UserModel')
const TweetModel = require('../Models/TweetModel')
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

module.exports = router