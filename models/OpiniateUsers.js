const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    password:{type:String},
    avatar:{type:String},
    location:{type:String},
    bio:{type:String}
    // cpassword:{type:String,required:true}
    });

module.exports = mongoose.model('OpiniateUsers',schema);