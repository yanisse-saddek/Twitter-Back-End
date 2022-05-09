const { ObjectId } = require('bson')
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:KuroGangganggang888@cluster0.zhclc.mongodb.net/Cluster0?retryWrites=true&w=majority')

const UserSchema = new mongoose.Schema({
    Id : ObjectId,
    Name: String,
    Email :String,
    Password : String ,
    Phone : Number,
    Follows : Number,
})
const User = mongoose.model("user",UserSchema)

const tweetSchema = new mongoose.Schema({
    Id :ObjectId,
    Content : String ,
    Date : Date ,
    Likes : Number,
    RT: Number,
})

const Tweet = new mongoose.model("Tweet",tweetSchema)

const CommentSchema = new mongoose.Schema({
    Id :
})
