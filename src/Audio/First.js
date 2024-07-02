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
    const but1=()=>{
        
        setfilttype("author");
    }
    const but2=()=>{
        
        setfilttype("genre");
    }
   

    const Datafilter1=()=>{
        const u=orig.filter((d)=>{
            const r=d.author;
            const pp=r.toLowerCase();
            const pp1=val.toLowerCase()
           // console.log(val)
            const t=pp.includes(pp1);
           // console.log(t)
            return t;
        });
        setdata(u)

    }
    const Datafilter2=()=>{
        const u=orig.filter((d)=>{
            const r=d.genre;
            const pp=r.toLowerCase();
            const pp1=val.toLowerCase()
            //console.log(val)
            const t=pp.includes(pp1);
            //console.log(t)
            return t;
        });
        setdata(u)

    }
 
    useEffect(()=>{
        console.log("len : ",val.length);
        if(val===""){
            //setdata(df);
            Start();
            
        console.log("lkkk :",data)
        }
        else if(filttype==="author"){
        Datafilter1();
        }
        else if(filttype==="genre"){
            Datafilter2();
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
        <SearchBox   val={val} setval={setval}/>
        <div className='but1'>
            <button  className="b1"onClick={but1}>Author</button>
            <button  className="b1"onClick={but2}>Genre</button>
        </div>
        <div  className='part1'>
            {data.length==0?<h1>Loading.....</h1>:
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
