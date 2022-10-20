const mongoose = require('mongoose');
const OpiniateDb=require('../configureDb/opinionDb')
const opiniateUsers = require('./OpiniateUsers')
const comments=require('./comments')
// const opinions = require('./')
const { Schema } = mongoose;
const schema = new mongoose.Schema({
    author:  { type: Schema.Types.ObjectId, ref: opiniateUsers },
    // avatar:String,
    opinion:   String,
    comments: [{ type: Schema.Types.ObjectId,ref: comments}],
    likes:[String],
    date: { type: Date, default: Date.now },
    });

module.exports = OpiniateDb.model('Opinions',schema);