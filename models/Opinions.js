const mongoose = require('mongoose');
const OpiniateDb=require('../configureDb/opinionDb')
const opiniateUsers = require('./OpiniateUsers')
const { Schema } = mongoose;
const schema = new mongoose.Schema({
    author:  { type: Schema.Types.ObjectId, ref: opiniateUsers },
    // avatar:String,
    opinion:   String,
    comments: [{ body: String, date: Date }],
    likes:[String],
    date: { type: Date, default: Date.now },
    });

module.exports = OpiniateDb.model('Opinions',schema);