const express = require('express');
const router = express.Router();
const   opinions =require("../models/Opinions");

router.get('/', function(req, res){
opinions.find((err, result)=>{
   
    if(err)
    console.log(err);

    else
   {

     res.send(result);
   }
});
});

module.exports = router;