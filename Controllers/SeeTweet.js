const express = require('express');
const app = express();
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:KuroGangganggang888@cluster0.zhclc.mongodb.net/Cluster0?retryWrites=true&w=majority')
const cors = require('cors')
const router = express.Router()
const TweetModel =require('../Models/TweetModel');


app.listen(3001,()=>{
    console.log('server is okey on port'+ " "+ 3001 )
})

app.get("/tweet",function(req, res, next){
    TweetModel.find()
})

module.exports = router