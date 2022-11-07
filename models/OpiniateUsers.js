const mongoose = require('mongoose');
const OpiniateDb=require('../configureDb/opinionDb')


const schema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    private:{type:Boolean},
    password:{type:String},
    avatar:{type:String},
    location:{type:String},
    incoming:[String],
    following:[String],
    followers:[String],
    bio:{type:String}
    // cpassword:{type:String,required:true}
    });

module.exports = OpiniateDb.model('OpiniateUsers',schema);