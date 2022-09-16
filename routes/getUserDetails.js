const   OpiniateUsersModel =require("../models/OpiniateUsers");
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get("/", (req,res) => {
    OpiniateUsersModel.find({},(err,result)=>{
        let userEmail=[];
        result.forEach(function(item,i){
            userEmail.push(item.email);
        })
        console.log(userEmail)
        res.send(userEmail)
    });
    
   
});

module.exports = router;