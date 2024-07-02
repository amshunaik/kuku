// JBtEHPSUpJgbEpDS
// amshu8674

// mongodb+srv://amshu8674:JBtEHPSUpJgbEpDS@cluster0.im3rvmq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//b9nthyY1YDqB3AqU

const express =require("express");
const cors =require("cors")
require('dotenv').config();
// const axios = require('axios'); // Import axios library
// const nodemailer = require("nodemailer");

const mongoose=require('mongoose');
mongoose.connect(process.env.MONGO_DB)

const app=express();
app.use(express.json());
app.use(cors());
const Rev=require('./Comment')
const User=require('./Usermod')
app.get("/start", async(req,res)=>{
    // await User.create({
    //     title:"Back to Start  ",
    //     author:"Sheetal marg",
    //     cover:"https://cdn.pixabay.com/photo/2022/01/21/06/07/music-6954018_640.jpg",
    //     genre:" Traditional, emotional journey ",
    //     rating:4.5,
    //     desc:"Audiobooks can be dated back to the 1930s. They were often used as an educational medium found in schools and libraries. Before audiobooks were available digitally, talking books, as they were often referred to, were sold in physical form on analog cassette tapes and vinyl records."
    
    // })
    const y=await User.find();
    console.log(y)
    res.send(y);

})
app.get("/point/:id", async(req,res)=>{
    const id=req.params.id;
   //console.log(id)
   const y=await User.findById(id);
   const r=await Rev.find({audio_id:id});
   //console.log(r);
   res.send({audio:y,review:r});
})
app.post("/review", async(req,res)=>{
    const rev=req.body;
    await Rev.create(rev);
    console.log(rev);
    res.send("recieved");
})

app.listen(5000, function(){
    console.log("server running")
})