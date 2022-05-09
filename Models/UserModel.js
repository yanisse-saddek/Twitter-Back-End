const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    Id : ObjectId,
    Name: String,
    Email :String,
    Password : String ,
    Phone : Number,
    Follows : Number,
})
const UserModel = mongoose.model("user",UserSchema)

module.exports = UserModel