
const df=[
    {
      
    title:"Think Twice",
    author:"  Harlan Coben",
    cover:"https://covers.audiobooks.com/images/covers/full/9781804944554.jpg",
    genre:" Suspense , Police and Detective",
    rating:3.5,
    desc:"Think Twice is about family, friendship, loyalty, secrets, lies and, most of all, the chance for redemption. It also is a sleekly written murder mystery that will have you guessing right up until the end and puts you firmly in the shoes of our very plausible and likable protagonist."

    },
    {
        
        title:"Vows & Ruins Play ",
        author:" Helen Scheuerer",
        cover:"https://covers.audiobooks.com/images/covers/full/9781666651614.jpg",
        genre:"Romance , Epic Fantasy ",
        rating:4,
        desc:"Against all odds, Althea Zoltaire emerged from her trials as a champion. Now, she must train even harder and prepare herself to become a true warrior of Thezmarr. But Thea's world is turned upside down as she struggles to navigate her newfound magic and uncover the secrets of her past."
    
        },
    {
   
    title:"The Idea Of You",
    author:"Robinne Lee",
    cover:"https://covers.audiobooks.com/images/covers/full/9781405951319.jpg",
    genre:"Modern , Contemporary Women",
    
    rating:4.5,
    desc:"It is a journey that spans continents as Solène and Hayes navigate each other's worlds: from stadium tours to international art fairs to secluded hideaways in Paris and Miami. For Solène, it is a reclaiming of self, as well as a rediscovery of happiness and love."


    },
    {
       
        title:"It Ends With Us",
        author:"Colleen Hoover",
        cover:"https://i.pinimg.com/736x/ae/88/1c/ae881ce31a50e696d975d968d6ba77b9.jpg",
        genre:"Modern , Contemporary Women",
        rating:4.5,
        desc:"From the #1 New York Times bestselling author of It Starts with Us and All Your Perfects, a “brave and heartbreaking novel that digs its claws into you and doesn’t let go, long after you’ve finished it” (Anna Todd, New York Times bestselling author) about a workaholic with a too-good-to-be-true romance who can’t stop thinking about her first love."
    
        },
    {
      
        title:"Never Lie",
        author:" Freida McFadden",
        cover:"https://covers.audiobooks.com/images/covers/full/9781666626063.jpg",
        genre:" Suspense , Thriller",
        rating:4.5,
        desc:"A newlywed couple is trapped in a remote manor during a blizzard and discovers a secret room containing audio transcripts from a missing psychiatrist's patients, revealing a terrifying chain of events leading up to her disappearance."
    
        },
        {
            
            title:"A Walk in the Park ",
            author:" Kevin Fedarko",
            cover:"https://covers.audiobooks.com/images/covers/full/9781797169583.jpg",
            genre:"History culture, travel tips ",
            rating:4,
            desc:"Two friends, zero preparation, one dream. From the author of the beloved bestseller The Emerald Mile, a rollicking and poignant account of an epic 750-mile odyssey, on foot, through the heart of America's most magnificent national park and the grandest wilderness on earth."
        
            },
       
    

    
]
const express =require("express");
const cors =require("cors")
require('dotenv').config();

const mongoose=require('mongoose');
mongoose.connect(process.env.MONGO_DB)

const app=express();
app.use(express.json());
app.use(cors());
const Rev=require('./Comment')
const User=require('./Usermod')
app.get("/start", async(req,res)=>{
    //await User.create(df)              // Uncomment this code to add the dataset and reload the main page of all audiocover and again comment it.
    
    const y=await User.find();
   // console.log(y)
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