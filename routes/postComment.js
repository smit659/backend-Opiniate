const opinions =require("../models/Opinions");
const trends   = require("../models/trend")
const express  = require('express');
const router   = express.Router();
const  OpiniateUsersModel =require("../models/OpiniateUsers");
const commentss = require("../models/comments")
router.post("/", (req,res) => {
    console.log(req.body);
    let hashmap=new Map();
    sentences=(req.body.comment.comment).split(" ");
    sentences.map((items,i)=>
    {
      if(items.startsWith("#"))
      {
        if(hashmap[items])
        {
          hashmap[items]++;
        }
        else
        {
        
          hashmap[items] =1; 
        }
      }
    })
    // console.log(hashmap)




    var oid = Date.now();
    
    OpiniateUsersModel.findOne({email:req.body.from},(err,results)=>{
      if(results)
      {
      const doc=new commentss({
        oid:oid,
       author: {email:results.email,avatar:results.avatar},
       opinion:req.body.comment.comment,
       
      //  avatar:req.body.avatar
         });

        doc.save(function(err,result){
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("ssssssssss ");

            // trending starts
         
        //    trending ends



        // comment starts
          console.log(req.body.id)

     
              
                opinions.findOneAndUpdate({_id:req.body.id},{
    
                    $push:{comments:result._id},
            
            
                },{
                    new:true
                }).exec((err,result)=>{
                    if(err){console.log(err) ;
                      res.status(422).json({error:err})}
                    else
                    res.send("Correct");
            });
            
   


        // comment ends


        

            // res.send('Success');
            // console.log(result); 
        }
       });
      }
      else
      res.sendStatus(404);

      })

   
});


module.exports = router;