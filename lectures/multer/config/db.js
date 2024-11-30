const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/multer');

const db = mongoose.connection;

db.on("connected", (err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log('db is connected .......');
}) 

module.exports = db;