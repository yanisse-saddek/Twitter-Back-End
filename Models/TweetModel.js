const mongoose = require('mongoose')

const tweetSchema = new mongoose.Schema({
    Content : String ,
    Date : Date ,
    Likes : Number,
    RT: Number,
})

const TweetModel = new mongoose.model("Tweet",tweetSchema)

module.exports = TweetModel