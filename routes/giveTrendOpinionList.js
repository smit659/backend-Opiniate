const express = require('express');
const router = express.Router();
const   opinions =require("../models/Opinions");

    router.post('/', async function(req, res){

    // console.log((req.body.location.trend));
    
    let arr=req.body.location.opinion
    let finalArr=[];
   
let result = await opinions.find({}).populate('author');


result.forEach((item,i)=>{
        
    if(JSON.stringify(arr).includes(JSON.stringify(item._id)))
    {
        // console.log(item)
        finalArr.push(item)
    }
    // console.log(finalArr)
})
res.send(finalArr)

});

module.exports = router;