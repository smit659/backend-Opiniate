const express = require('express');
const router = express.Router();
const   opinions =require("../models/Opinions");
const   OpiniateUsersModel =require("../models/OpiniateUsers");
router.get('/:email', async function(req, res){
    console.log(req.params.email+" is");


    OpiniateUsersModel.findOne({email:req.params.email},async(err,result)=>{
       let finalResult = [];
        if(result)
        {
        let following = result.following;
        
        let resulted=  await opinions.find({flag:false}).populate('author');
        resulted.forEach(async function(elem,i){
            
            if(following.includes(elem.author.email))
            {
                finalResult.push(elem);
            }

        });
        // console.log(resulted);
        res.send(finalResult);
        }
        else
        console.log(err)
    });


});

module.exports = router;