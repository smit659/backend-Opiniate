const express = require('express');
const router = express.Router();
const   opinions =require("../models/Opinions");

router.get('/', function(req, res){
opinions.find({},(err, result)=>{
   
    if(err)
    console.log(err);

    else
   {
    //  console.log(result)
    let sentences="";
    let hashmap=new Map();
    result.map((item,i)=>sentences+=item.opinion+" ");
    var arr=sentences.split(" ");
    console.log(arr);
     res.send(result);
   }
});
});

module.exports = router;