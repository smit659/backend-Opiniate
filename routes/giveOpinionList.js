const express = require('express');
const router = express.Router();
const   opinions =require("../models/Opinions");

router.get('/', function(req, res){
opinions.find((err, result)=>{
   
    if(err)
    console.log(err);

    else
   {
    
   
    let ans="";
    let hashmap=new Map();
    result.map((item,i)=>{
       var sentences;
       sentences=(item.opinion).split(" ")
      
      sentences.map((item,i)=>
      {
        if(item.startsWith("#"))
        {
          if(hashmap[item])
          {
            hashmap[item]++;
          }
          else
          hashmap[item] =1; 
        }
      }
      )
      
  });
    
    console.log(hashmap);
    

     res.send(result);
   }
});
});

module.exports = router;