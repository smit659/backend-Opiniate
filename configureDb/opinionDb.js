const mongoose = require('mongoose');

const OpiniateDb=mongoose.createConnection
('mongodb+srv://smit-admin:555admin@cluster0.12u2y.mongodb.net/Opiniate',
{useNewUrlParser:true,useUnifiedTopology:true},
()=>console.log('successfully connected to db'));

module.exports=OpiniateDb;


