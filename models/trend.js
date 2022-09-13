const mongoose = require('mongoose');
const OpiniateDb=require('../configureDb/opinionDb')


const schema = new mongoose.Schema({
    trend: String,
    opinion:   [String],
    
    });

module.exports = OpiniateDb.model('trends',schema);