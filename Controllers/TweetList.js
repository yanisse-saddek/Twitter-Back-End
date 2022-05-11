const express = require('express')
const router = express.Router()
const UserModel = require('../Models/UserModel')
const TweetModel = require('../Models/TweetModel')
var ObjectId = require('mongoose').Types.ObjectId;
const passport = require('../config/passport')

// http://localhost:3001/follow/627a7897d4a63621c0c2b510

const isConnected = (req, res, next)=>{
    if(req.user){
        next()
    }else{
        res.status(400).send('not connected')
    }
}

router.get('/@:id', (req, res)=>{
    UserModel.findOne({'Arobase':req.params.id}).exec().then(data=>{
        if(data){
            res.status(200).json(data)
        }else{
            res.status(404).json("Error, not exist")
        }
    })
})

router.get('/tl', (req, res)=>{
    TweetModel.find({}).exec().then(data=>{
      res.json(data)
    })
})

router.get("/tl/:idTweet",function(req, res, next){
    if(ObjectId.isValid(req.params.idTweet)){
        TweetModel.findOne({'_id':req.params.idTweet}).exec().then(data=>{
            res.json(data)
        })
    }else{
        res.status(404).json('undefined')
    }
})


// http://localhost:3001/follow/627bae3c753e562f50149021
router.post('/follow/:id', 
isConnected ,
(req, res)=>{
    const id = req.params.id
    console.log(req.user)
    if(ObjectId.isValid(id)){
        UserModel.find({_id:id}).exec().then(data=>{
            console.log(data[0])
            if(data[0].FollowedBy.includes(req.user._id)){
                UserModel.update({_id:id},{$pull:{FollowedBy:req.user._id}})
                        .then(data=>{
                            res.status(200).json("unfollow")   
                })
            }else{
                UserModel.update({_id:id},{$push:{FollowedBy:req.user._id}})
                        .then(data=>{
                            res.status(200).json('follow')   
                })
            }
        })
    }else{
        res.status(404).json('unexist')
    }
    //     UserModel.update({_id:req.params.id},{$push:{FollowedBy:req.user._id}})
    //              .then(data=>{
    //                 res.status(200).json(data)   
    //             })

})

module.exports = router