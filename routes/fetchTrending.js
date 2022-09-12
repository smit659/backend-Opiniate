const express = require('express');
const router = express.Router();
const   opinions =require("../models/Opinions");

router.get('/', function(req, res){
opinions.find({},(err, result)=>{
   
    if(err)
    console.log(err);

    else
   {
    //  console.log(result[0]._id)
    let ans="";
    let hashmap=new Map();
    var hashmap2=new Map();
     result.map((item,i)=>{
       var sentences;
       sentences=(item.opinion).split(" ")
      
      sentences.map((items,i)=>
      {
        if(items.startsWith("#"))
        {
          if(hashmap[items])
          {
            hashmap[items]++;
            var arrOfid=hashmap2.get(items);
            arrOfid.push(item._id);
            hashmap2.set(items,arrOfid);
          }
          else
         {
          hashmap[items] =1; 
          var arrOfid=[];
          // console.log(item._id)
          arrOfid.push(item._id);
          hashmap2.set(items,arrOfid);
          }
        }
      }
      )
      
  });
 
  var array = [];
  var array2 = [];
  
  hashmap2.forEach(function(value,key){
    array2.push({
        name: key,
        value: value
      });
  });
  // console.log(array2);
  for (var key in hashmap) {
  array.push({
    name: key,
    value: hashmap[key]
  });
    }
    var sorted = array.sort(function(a, b) {
      return (a.value < b.value) ? 1 : ((b.value < a.value) ? -1 : 0)
      });
 
    // console.log(hashmap2);
      
     res.send({array:array.slice(0,10), hashmap2:array2});
   }
});
});

module.exports = router;