const   OpiniateUsersModel =require("../models/OpiniateUsers");
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get("/:email", async (req,ress) => {
   
     const email = req.params.email;
     await OpiniateUsersModel.find({followers:{$nin:email}}).then((result)=>{
        let userEmail=[{}];
        let c=0;
    //    console.log(result)


        const res = [];
        for(let i = 0; i < 6; ){
           const random = Math.floor(Math.random() * result.length);
           if(res.indexOf(result[random]) !== -1){
              continue;
           };
           res.push(result[random]);
           i++;
        };

            res.forEach((user,i)=>{
                if(user.email!='' && user.email!=email)
                userEmail.push({email:user.email,avatar:user.avatar});
                c++;
                if(c==res.length)
                {ress.send(userEmail);}

            })
            // console.log(userEmail);
            
        
    }).catch((err)=>{console.log(err)});
    
   
});

module.exports = router;