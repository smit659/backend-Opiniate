const express = require('express');
const router = express.Router();
const   opinions =require("../models/Opinions");

router.post('/', function(req, res){
    // console.log((req.body.location[0].name));
    let arr=[];
    let finalArr=[];
    for(var i=0;i<req.body.location.length;i++)
    {
        if(req.body.location[i].name=='#'+req.body.trendname)
        {
            break;
        }
    }
     arr=req.body.location[i].value;
    console.log(arr);
opinions.find((err, result)=>{
   
    if(err)
    console.log(err);

    else
   {
    
       result.forEach((item,i)=>{
        
        if(JSON.stringify(arr).includes(JSON.stringify(item._id)))
        {
            console.log(item)
            finalArr.push(item)
        }
        // console.log(finalArr)
    })
  
     res.send(finalArr);
   }
});
});

module.exports = router;