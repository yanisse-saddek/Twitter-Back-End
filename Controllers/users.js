const mongoose = require('mongoose')
const userModel = require('../Models/UserModel')
const express = require('express')
const router = express.Router()

router.get('/:id/followers', (req, res, next) => {
  const id = req.params.id
  console.log(id)
  userModel.findById(id).exec().then(data => {
    res.json(data)
  }).catch(err => {
    console.log(err);
    res.status(400).json('invalid')
  })
})




module.exports = router

