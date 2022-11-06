
const   opinions =require("../models/Opinions");
const opiniateUsers = require('../models/OpiniateUsers');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/:id', (req,res)=>{
    let resultArr=[];
    console.log("=====")
    console.log(req.params.id);
    opinions.findOne({_id:req.params.id})
    .then((result)=>{

    
    
         if(result.comments){
           
        const firstPromise=new Promise((resolve,reject)=>{
            var c=0;
            result.comments.map( function(comment,i)
            {
                    
                 opinions.findOne({_id:comment._id}).then( (fd)=>{
                  
                        c++;
                  
                      
                        // console.log(fd)
                        resultArr.push(fd);
                        if(c==result.comments.length)
                        {
                        resolve("Task completed ! ");
                        result.comments=resultArr;
                        
                        }
                       
                        
                    }).catch((err)=>{console.log(err)})
             
            
            
    //   
           
             })
             
   
        });

        firstPromise.then((ress)=>{ 
            let itr=0;
            let finalResult =result
            finalResult.comments.map((comment,i)=>{
               
               
                opiniateUsers.findById(comment.author).then((found)=>
                {
                    itr++;
                  
                    comment.authorInfoEnglish=found;
                     
                    if(itr==finalResult.comments.length)
                    {
                        comment.authorInfoEnglish=found;
                        console.log(finalResult)
                       
                     
                        res.send(finalResult);
                    }
                       
                        
                       
                    
                })
                .catch((err)=>{console.log(err)})
               
                  
            });
           
           }).catch((err)=>{console.log(err)})
       
}



})
    // console.log(result.comments[0].author)

});
module.exports = router;