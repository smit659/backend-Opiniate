const  OpiniateUsersModel =require("../models/OpiniateUsers");
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/:author',(req,res)=>{
    
    OpiniateUsersModel.findOne({email:req.params.author},(err,result)=>{
       
        if(result)
        {
        const ans={private:result.private,followersNumber:result.followers.length,followingNumber:result.following.length,followers:result.followers,following:result.following,avatar:result.avatar,bio:result.bio,incoming:result.incoming,email:result.email}
        console.log(ans+" is")
        res.send(ans);
        }
        else
        res.sendStatus(404)
    });
});
module.exports = router;