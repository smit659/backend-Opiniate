
const   opinions =require("../models/Opinions");
const opiniateUsers = require('../models/OpiniateUsers');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/:id',async (req,res)=>{
    console.log("=====")
    console.log(req.params.id);
    let result= await opinions.findOne({_id:req.params.id}).populate('comments')
   
    if(result.comments){
        
        const firstPromise=new Promise((resolve,reject)=>{
            var c=0;
            result.comments.forEach(async function(comment,i){
                // console.log(comment)
                
             let found=await opiniateUsers.findOne({_id:comment.author});
             if(found)
             {
                c++;
                comment.author=found;
                if(c==result.comments.length)
                resolve("Task completed ! ")
             }


            
    //   
    })
   
        });

        firstPromise.then((ress)=>{    res.send(result);}).catch((err)=>{console.log(err)})
       
}

  
    // console.log(result.comments[0].author)

});
module.exports = router;