const   OpiniateUsersModel =require("../models/OpiniateUsers");
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

router.post("/", (req,res) => {
    console.log(req.body);

OpiniateUsersModel.findOne({email:req.body.email},function(err,result){
 if(result)
{
    res.status(403).send('Email Already Exists')      
}
 
 else
 {
    bcrypt.hash(req.body.password,10,(err,hash)=>{

        const doc=new OpiniateUsersModel({
        name:req.body.name,
        email:req.body.email,
        password:hash,
        location:req.body.location,
        bio:req.body.bio
    });

        doc.save(function(err,result){
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send('Success');
            console.log(result);
        }
       });


    });
  }
 });
});

module.exports = router;