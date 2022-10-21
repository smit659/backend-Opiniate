const mongoose = require('mongoose');
const OpiniateDb=require('../configureDb/opinionDb')
const opiniateUsers = require('./OpiniateUsers')
// const opinions = require('./')
const { Schema } = mongoose;
const schema = new mongoose.Schema({
    author:  { },
    // avatar:String,
    opinion:   String,
    comments: [{}],
    likes:[String],
    date: { type: Date, default: Date.now },
    });

module.exports = OpiniateDb.model('Comments',schema);