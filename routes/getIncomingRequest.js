const  OpiniateUsersModel =require("../models/OpiniateUsers");
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/:author',(req,res)=>{
    console.log(req.params.author);
    OpiniateUsersModel.findOne({name:req.params.author},(err,result)=>{
        // if(err) {console.log(err);}
        
        console.log(result.incoming);
        const obj={incoming:result.incoming,avatar:result.avatar}
        res.send(obj);
    });
});
module.exports = router;