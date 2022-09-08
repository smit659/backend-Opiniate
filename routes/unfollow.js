const  OpiniateUsersModel =require("../models/OpiniateUsers");
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/',(req,res)=>{
    console.log(req.body);
    OpiniateUsersModel.findOneAndUpdate({email:req.body.to},{
        $pull:{followers:req.body.from},
       
        
    },{
        new:true
    }).exec((err,result)=>{
        if(err){return res.status(422).json({error:err})}
        else
        {
            OpiniateUsersModel.findOneAndUpdate({email:req.body.from},{
                $pull:{following:req.body.to},
               
                
            },{
                new:true
            }).exec((err,result)=>{
                if(err){return res.status(422).json({error:err})}
              
                
            }
            )
        }
        
    }
    
    )
    res.send("correct")
    });

module.exports = router;