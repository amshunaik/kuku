import React from 'react'
import { useState } from 'react';
const Feedback = (props) => {
    
    const [name,setname]=useState("");
    const [rate,setrate]=useState("");
    const [comment,setcomment]=useState("");
    const [err,seterr]=useState(false)
    const Submithandler=async(e)=>{
        e.preventDefault();
        if(name==""||rate==""||comment==""){
            seterr(true);
            return;
            
        }
        
       console.log("ghh",props.Gid)
      
       const today = new Date();
       const options = { day: 'numeric', month: 'long', year: 'numeric' };
       const formattedDate = today.toLocaleDateString('en-US', options);
       console.log(formattedDate); // Outputs something like "July 2, 2024" (depending on your locale)

       //return;
        const cmt={audio_id:props.Gid, name:name,date:formattedDate, rate:parseFloat(rate),comment:comment};
        const prd=await fetch("http://localhost:5000/review",{
            method: 'POST',
            body: JSON.stringify(cmt),
            headers: {
              'Content-Type': 'application/json'
            },
        })
        const resp=await prd.text();
        console.log(resp);
        alert("Feedback Recieved");
        setname("");
        setrate("")
        setcomment("");
    }

    const handleChange = (e) => {
        const value = Number(e.target.value);
        if (value > 5) {
          setrate(0);
        } else {
          setrate(value);
        }
      };
  return (
    <div>
        <div className='part5'>
         <h1 className='comment5'>Add review/comments </h1>
         <div className='Comment_form5'>
           
                <div className='rev1'>
                    <label className="lab1"htmlFor="">Name : </label>
                    <input className='input5' type="text" value={name} onChange={(e)=>setname(e.target.value)} required/>
                    {name==""&&err&&<h2 className='err'>Enter your name </h2>}
                </div>
                <div className='rev1'>
                    <label className="lab1" htmlFor="">Rate your experience out of 5: </label>
                    <input className='input5' type="number" min="0" max="5" value={rate} onChange={handleChange} required/>
                    {rate==""&&err&&<h2 className='err'>Rate your experience </h2>}
                </div>
                <div className='rev1'>
                    <label className="lab1" htmlFor="">Any comments : </label>
                    <textarea className='input5' type="text" value={comment} onChange={(e)=>setcomment(e.target.value)} rows="5" cols="20" required/>
                    {comment==""&&err&&<h2 className='err'>Add a comment </h2>}
                </div>
                <button className='but2' onClick={Submithandler}>Send</button>
           
         </div>
            </div>
      
    </div>
  )
}

export default Feedback
