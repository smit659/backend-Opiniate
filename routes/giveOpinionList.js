const express = require('express');
const router = express.Router();
const   opinions =require("../models/Opinions");

router.get('/', function(req, res){
opinions.find((err, result)=>{
   
    if(err)
    console.log(err);

    else
   {
    
   
  //   let ans="";
  //   let hashmap=new Map();
  //   result.map((item,i)=>{
  //      var sentences;
  //      sentences=(item.opinion).split(" ")
      
  //     sentences.map((item,i)=>
  //     {
  //       if(item.startsWith("#"))
  //       {
  //         if(hashmap[item])
  //         {
  //           hashmap[item]++;
  //         }
  //         else
  //         hashmap[item] =1; 
  //       }
  //     }
  //     )
      
  // });
 
  // var array = [];
  // for (var key in hashmap) {
  // array.push({
  //   name: key,
  //   value: hashmap[key]
  // });
  //   }
  //   var sorted = array.sort(function(a, b) {
  //     return (a.value < b.value) ? 1 : ((b.value < a.value) ? -1 : 0)
  //     });
 
  //   console.log(array);
    

     res.send(result);
   }
});
});

module.exports = router;