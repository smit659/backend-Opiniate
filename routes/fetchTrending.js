const express = require('express');
const router = express.Router();
const   opinions =require("../models/Opinions");
const trends = require("../models/trend")

router.get('/', function(req, res){
trends.find({},(err, result)=>{
   
    if(err)
    console.log(err);

    else
   {
    function compare( a, b ) {
      if ( a.opinion.length< b.opinion.length ){
        return 1;
      }
      if (a.opinion.length> b.opinion.length  ){
        return -1;
      }
      return 0;
    }
    result.sort( compare );

    console.log(result);
    res.send(result);
   }
});
});

module.exports = router;