const express = require('express');
const router = express.Router()
const TweetModel =require('../Models/TweetModel');

router.get("/tweet",function(req, res, next){
    TweetModel.find()
})


module.exports = router