const  OpiniateUsersModel =require("../models/OpiniateUsers");
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/:author',(req,res)=>{
    console.log(req.params.author);
    OpiniateUsersModel.findOne({name:req.params.author},(err,result)=>{
        console.log(result.incoming);
        const ans={followersNumber:result.followers.length,followingNumber:result.following.length,followers:result.followers,following:result.following}
        res.send(ans);
    });
});
module.exports = router;