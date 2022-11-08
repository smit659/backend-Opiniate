const express = require('express');
const router = express.Router();
const   opinions =require("../models/Opinions");
const   OpiniateUsersModel =require("../models/OpiniateUsers");
router.get('/:email', async function(req, res){
    console.log(req.params.email+" on");

    let finalResult=[];
    let result=await opinions.find({likes:req.params.email}).populate('author')
    
    if(result){
        console.log(result)
        res.send(result);
    }


});

module.exports = router;