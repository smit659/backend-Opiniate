const express = require('express');
const router = express.Router();
const   opinions =require("../models/Opinions");

router.get('/', async function(req, res){
let result= await opinions.find({flag:false}).populate('author');
// console.log(result[result.length-1]);
res.send(result);
});

module.exports = router;