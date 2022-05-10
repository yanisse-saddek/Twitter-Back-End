const express = require('express');
const app = express();
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:KuroGangganggang888@cluster0.zhclc.mongodb.net/Cluster0?retryWrites=true&w=majority')
const router = express.Router()
app.use(express.json())
const TweetModel =require('../Models/TweetModel');


app.listen(3001,()=>{
    console.log('server is okey on port'+ " "+ 3001 )
})

app.post("/tweet",function(req, res, next){
    const newTweet = new TweetModel(req.body)
    newTweet.save()
    res.json(newTweet)
})

module.exports = router