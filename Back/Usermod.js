const mongoose = require('mongoose');

const userScheme=new mongoose.Schema({
    title:String,
    author:String,
    cover:String,
    genre:String,
    rating:Number,
    desc:String


});

module.exports=mongoose.model('Audio',userScheme);