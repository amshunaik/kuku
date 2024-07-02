import React, { useEffect, useState } from 'react'
import df from "./Data"
import { useNavigate } from 'react-router-dom';
import SearchBox from './SearchBox';
import { NavLink } from 'react-router-dom';
import './First.css'
const First = () => {
   const nav=useNavigate();
    const [val,setval]=useState("");
    const [filttype,setfilttype]=useState(null);
    const [data,setdata]=useState([]);
    const [orig,setorig]=useState()
   
  
    const Start=async()=>{
        const fr=await fetch("http://localhost:5000/start");
        const rp=await fr.json();
        setdata(rp);
        setorig(rp);
        
        console.log("new one : ",rp);
    }
   
   

    const Datafilter1=()=>{
        const u=orig.filter((d)=>{
            const r=d.author;
            const pp=r.toLowerCase();
            const pp1=val.toLowerCase()
          
            let t=pp.includes(pp1);
            console.log("t", t)
           
            return t;
        });
        u.sort(function(a , b) {
                return b.rate - a.rate;
            });
        
        setdata(u)

    }
   
 
    useEffect(()=>{
        console.log("len : ",val.length);
        if(val===""){
           
            Start();
        }
        else{
            Datafilter1();
        }
       
        
        console.log("df : ",data)

    },[val])

    const Tested=async(id)=>{
        console.log(id);
        nav(`/${id}`);
    }

  return (
    <div>
        <h1 className='Main'>Audio-Books Catelogue</h1>
        <SearchBox  val={val} setval={setval}/>
        
        <div  className='part1'>
            {data.length==0?<h1>No list found</h1>:
            <>{data.map((d)=>(
                <div key={d._id} onClick={()=>Tested(d._id)} className='Book'>
                    <img src={d.cover} alt="" className='cover' />
                   <div className='detail1'>
                   <h1 className='title1'>{d.title}</h1>
                   <h3 className='author1'>{d.author}</h3>
                   </div>
                    </div>
            ))}
            </>
            }
        </div>

      
    </div>
  )
}

export default First
