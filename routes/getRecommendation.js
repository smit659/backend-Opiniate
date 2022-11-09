const OpiniateUsersModel =require("../models/OpiniateUsers");
const express = require('express');
const opinions = require("../models/Opinions");
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get("/:email", async (req,res) => {
   
     const email = req.params.email;
    let result=await opinions.find({flag:false}).populate('author');
    let finalResult = [];
    
    if(result)
    {
        console.log(result);
    result.forEach((item,i)=>{
        if(!item.author.followers.includes(email) && item.author.email!=email  && item.author.private==false)
        {
            finalResult.push(item);
        }

    });
    


    const resu = [];
    for(let i = 0; i < finalResult.length; ){
       const random = Math.floor(Math.random() *finalResult.length);
       if(resu.indexOf(finalResult[random]) !== -1){
          continue;
       };
       resu.push(finalResult[random]);
       i++;
    };

    console.log(finalResult)
    res.send(finalResult)
}
   
});

module.exports = router;