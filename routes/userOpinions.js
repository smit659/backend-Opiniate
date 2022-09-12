const   opinions =require("../models/Opinions");
const express = require('express');
const router = express.Router();


router.post("/", (req,res) => {
    console.log(req.body);

    const doc=new opinions({
       author: req.body.author,
       opinion:req.body.opinion
    });

        doc.save(function(err,result){
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send('Success');
            // console.log(result); 
        }
       });

   
});


module.exports = router;