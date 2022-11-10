require('dotenv').config();
const  OpiniateUsersModel =require("../models/OpiniateUsers");
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const cloudinary=require('cloudinary');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path=require('path');


cloudinary.config({ 
    cloud_name:process.env.cloud_name,
    api_key:process.env.api_key , 
    api_secret: process.env.api_secret
});
const storage = multer.diskStorage({});

const upload=multer(
    {storage:storage,limits:{fieldSize:10*1024*1024},fileFilter:(req,file,cb)=>{
    let ext=path.extname(file.originalname);
    cb(null,true);
    }});

router.post('/',[upload.single('imager')],
  async(req,res) => {
  console.log(req.body);
  let result=null;
  

  if(req.file)
  { result= await cloudinary.uploader.upload(req.file.path);
    
    OpiniateUsersModel.findOneAndUpdate({email:req.body.to},
    {
    avatar:result?result.secure_url:"",
    bio:req.body.bio,
    private:req.body.pri
    },function(err,result)
    {
   if(err) 
   console.log(err)
   else
   res.send("done")
    }
);
  }
  else
  {
    OpiniateUsersModel.findOneAndUpdate({email:req.body.to},
      {
      avatar:req.body.avatar,
       bio:req.body.bio,
      private:req.body.pri
      },function(err,result)
      {
     if(err) 
     console.log(err)
     else
     res.send("done")
      }
  );
  }
            
   
    
    
});

module.exports = router;