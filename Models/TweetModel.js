const { MongoGridFSChunkError } = require('mongodb')
const mongoose = require('mongoose')

const tweetSchema = new mongoose.Schema({
    Content : String ,
    Date : Date ,
    Likes : Number,
    RT: Number,
    userOwner:[{
        type:mongoose.Types.ObjectId,
        ref:"user"
    }]
})

const TweetModel = new mongoose.model("Tweet",tweetSchema)

module.exports = TweetModel