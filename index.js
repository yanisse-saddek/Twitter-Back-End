const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:KuroGangganggang888@cluster0.zhclc.mongodb.net/Cluster0?retryWrites=true&w=majority')
const session = require('express-session')
const passport = require('./config/passport')
const Register = require('./Controllers/Register')
const Login = require('./Controllers/Login')
const Users = require('./Controllers/allUsers')
const Pages = require('./Controllers/TweetList')

app.use(session({
    secret: 'ok', 
    resave: false, 
    saveUninitialized: false,
    cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000
      }
  
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.json())

app.use('/register', Register)
app.use('/users', Users)
app.use('/login', Login)
app.use('/', Pages)

app.listen(3001)

