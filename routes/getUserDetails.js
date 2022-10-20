const   OpiniateUsersModel =require("../models/OpiniateUsers");
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get("/", (req,res) => {
    OpiniateUsersModel.find({},(err,result)=>{
        
        if(result){
        console.log(result);
        res.send(result)
        }
    });
    
   
});

module.exports = router;