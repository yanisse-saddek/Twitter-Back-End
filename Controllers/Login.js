const express = require('express')
const router = express.Router()
const UserModel = require('../Models/UserModel')
const passport = require('../config/passport')


router.post('/', 
passport.authenticate('local'),
(req, res) => {
  if (req.user) {
    req.logIn(req.user, (err) => {
        res.status(200).json(req.user)
      })
    }else{
      res.json("eh no")
    }
})


router.get('/test', (req, res)=>{
    console.log(req.user)
    res.json(req.user)
})


module.exports = router