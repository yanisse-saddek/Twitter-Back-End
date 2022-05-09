const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    Id :ObjectId,
    content : String,
    Likes : Number,
    Date : Date ,
    RT: Number,
    UserId:String, 
})

const CommentModel = new mongoose.model("Comment",CommentSchema)

module.exports = CommentModel