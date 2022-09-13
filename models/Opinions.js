const mongoose = require('mongoose');
const OpiniateDb=require('../configureDb/opinionDb')


const schema = new mongoose.Schema({
    author: String,
   
    opinion:   String,
    comments: [{ body: String, date: Date }],
    likes:[String],
    date: { type: Date, default: Date.now },
    });

module.exports = OpiniateDb.model('Opinions',schema);