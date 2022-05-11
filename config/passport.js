const passport = require('passport')
const LocalStrategy  = require('passport-local')
const mongoose = require('mongoose')
const UserModel = require('../Models/UserModel')
const bcrypt = require('bcrypt')

passport.use(new LocalStrategy(
  {
    usernameField:"Email", 
    passwordField:"Password"
  },
async (email, password, done)=> {

  const user = await UserModel.findOne({Email:email})
  if (!user) {
    console.log('ya po')
    return done(null, false)
  }

    bcrypt.compare(password, user.Password, function(err, result) {
      if (result) {
        done(null, user)
      }
      else {
        return done(null, false)
      }
    });
}))

passport.serializeUser((user, done) => {
  done(null, user._id)
})

passport.deserializeUser((id, done) => {
  UserModel.findById(id, (err, user)=>{
    done(err, user);
  });
})
module.exports = passport
