const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    Name: String,
    Arobase: String,
    Email :String,
    Password : String ,
    Phone : Number,
    FollowedBy : [String],
    Follows : [String],
})
const UserModel = mongoose.model("user",UserSchema)

module.exports = UserModel