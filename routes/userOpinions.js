const opinions =require("../models/Opinions");
const trends   = require("../models/trend")
const express  = require('express');
const router   = express.Router();
const  OpiniateUsersModel =require("../models/OpiniateUsers");

router.post("/", (req,res) => {
    console.log(req.body);
    let hashmap=new Map();
    sentences=(req.body.opinion).split(" ");
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
    
    OpiniateUsersModel.findOne({email:req.body.author},(err,results)=>{
      if(results)
      {
      const doc=new opinions({
        oid:oid,
        flag:false,
       author: results._id,
       opinion:req.body.opinion,
      //  avatar:req.body.avatar  
         });

        doc.save(function(err,result){
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(result._id);
            if(results.private==false)
            {
           for(var key in hashmap)
           {
                trends.findOne({trend:key},(err,ans)=>{
                        if(ans)
                        {
                            trends.findOneAndUpdate({trend:key},{
    
                                $push:{opinion:result._id},
                        
                        
                            },{
                                new:true
                            }).exec((err,ans)=>{
                                if(err){return res.status(422).json({error:err})}
                                
                                // res.send("Correct");
                        });
                        }
                        else
                        {
                            const doc=new trends({
                                
                            trend:key,
                            opinion:result._id

                            });
                            doc.save();
                            
                        }

                });
           }
          }

        

            res.send('Success');
            // console.log(result); 
        }
       });
      }
      else
      res.sendStatus(404);

      })

   
});


module.exports = router;