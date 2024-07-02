const mongoose = require('mongoose');

const userScheme=new mongoose.Schema({
    audio_id:String,
    name:String,
    date:String,
    rate:String,
    comment:String,
   


});

module.exports=mongoose.model('review',userScheme);