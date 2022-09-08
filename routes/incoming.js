const  OpiniateUsersModel =require("../models/OpiniateUsers");
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/',(req,res)=>{
    console.log(req.body);
    OpiniateUsersModel.findOne({email:req.body.to}, function(err,result){
            if(result.incoming.includes(req.body.from)){
                return;
            }
            else
            {
                OpiniateUsersModel.findOneAndUpdate({email:req.body.to},{
    
                    $push:{incoming:req.body.from},
            
            
                },{
                    new:true
                }).exec((err,result)=>{
                    if(err){return res.status(422).json({error:err})}
                    else
                    res.send("Correct");
            });
            }
    });
    
    
});

module.exports = router;