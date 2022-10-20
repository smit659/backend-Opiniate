
const   opinions =require("../models/Opinions");
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/:id',async (req,res)=>{
    console.log("=====")
    console.log(req.params.id);
    let result= await opinions.findOne({_id:req.params.id}).populate('comments')
    console.log(result)
    res.send(result)
});
module.exports = router;