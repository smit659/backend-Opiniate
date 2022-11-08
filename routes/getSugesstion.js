const   OpiniateUsersModel =require("../models/OpiniateUsers");
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get("/", async (req,res) => {
   
     await OpiniateUsersModel.find({}).then((result)=>{
        let userEmail=[{}];
        let c=0;
       
            result.forEach((user,i)=>{
                userEmail.push({email:user.email,avatar:user.avatar});
                c++;
                if(c==result.length)
                {console.log(userEmail);res.send(userEmail);}

            })
            // console.log(userEmail);
            
        
    }).catch((err)=>{console.log(err)});
    
   
});

module.exports = router;