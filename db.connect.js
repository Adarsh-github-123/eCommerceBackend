const mongoose = require('mongoose');
require('dotenv').config();

function database(){
    const uri = process.env.uri;
    try{
        mongoose.connect(uri, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        })
        console.log("Working!!");
    }catch(err){
        console.log("Not working");
    }
}

module.exports = database;