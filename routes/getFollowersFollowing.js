const  OpiniateUsersModel =require("../models/OpiniateUsers");
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/:author',(req,res)=>{
    console.log(req.params.author);
    OpiniateUsersModel.findOne({name:req.params.author},(err,result)=>{
        console.log(result.incoming);
        const ans={followers:result.followers.length,following:result.following.length}
        res.send(ans);
    });
});
module.exports = router;