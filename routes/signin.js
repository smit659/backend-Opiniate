const   OpiniateUsersModel =require("../models/OpiniateUsers");
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post("/", (req,res) => {
    console.log(req.body);
    
    try
    { 
        const email=req.body.email;
        const pass=req.body.password;

        OpiniateUsersModel.findOne({email:email}, function(err, result){
            if(result)
            {
                bcrypt.compare(pass,result.password,function(errr,ress)
                {
                    if(ress)
                    {
                        jwt.sign({email:email,name:result.username},'secretkeyOpiniate',function(err,token)
                        {
                                if(err){console.log(err);}

                                else
                                {
                                   res.send({token:token,username:result.username,email:result.email});
                                }
                        });                        
                    }
                    else
                    {
                        res.status(403).send('User not registered');
                    }
                });
            }
            else
            {
                res.status(403).send('User not registered');
            }
        });
    }
    catch(err)
    {
        res.status(400).send(err);
    }
});

module.exports = router;