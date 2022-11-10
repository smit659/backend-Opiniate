
require('dotenv').config();
const mongoose = require('mongoose');

const OpiniateDb=mongoose.createConnection
(process.env.MONGOURI,
{useNewUrlParser:true,useUnifiedTopology:true},
()=>console.log('successfully connected to db'));

module.exports=OpiniateDb;


