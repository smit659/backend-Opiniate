const express = require('express');
const router = express.Router();
const   opinions =require("../models/Opinions");
const   OpiniateUsersModel =require("../models/OpiniateUsers");
router.get('/:email', async function(req, res){
    console.log(req.params.email+" is");

    let finalResult=[];
    let result=await opinions.find({flag:false}).populate('author');
    let itr=0;
    result.forEach((element, index)=>{
       
        if(element.author.email==req.params.email)
        {
            finalResult.push(element);
        }
        itr++;

        if(itr==result.length-1)
        {
            console.log('/////////');
            res.send(finalResult);

        }
    })


});

module.exports = router;