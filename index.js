const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:KuroGangganggang888@cluster0.zhclc.mongodb.net/Cluster0?retryWrites=true&w=majority')
const session = require('express-session')
const passport = require('./config/passport')
const register = require('./Controllers/Register')
const Login = require('./Controllers/Login')

app.use(session({
    secret: 'ok', 
    resave: false, 
    saveUninitialized: false,
}))
app.use(passport.initialize())
app.use(passport.session())


app.use(express.json())
app.use('/register', register)
app.use('/login', Login)

app.listen(3001)