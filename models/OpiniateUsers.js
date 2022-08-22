const mongoose = require('mongoose');

const OpiniateDb=mongoose.createConnection
('mongodb+srv://smit-admin:555admin@cluster0.12u2y.mongodb.net/Opiniate',
{useNewUrlParser:true,useUnifiedTopology:true},
()=>console.log('successfully connected to db'));

const schema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    avatar:{type:String},
    location:{type:String},
    bio:{type:String}
    // cpassword:{type:String,required:true}
    });

module.exports = OpiniateDb.model('OpiniateUsers',schema);