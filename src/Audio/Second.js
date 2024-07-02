import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Review from './Review';
import './Second.css'
import Feedback from './Feedback';
const Second = () => {
    const [data,setdata]=useState(null);
    const [review,setreview]=useState([])
    const {id}=useParams();
    const up={id};
    const Initiate=async()=>{
        const t=52
        const rd=await fetch(`http://localhost:5000/point/${id}`);
        const y1= await rd.json();
 
        setdata(y1.audio);
        setreview(y1.review);  
    }
    useEffect(()=>{
        Initiate();
    })

    
  return (
    <div>
        {data==null?
        <h1>loading.....</h1>:
        <div>
            <div className='part2'>
                
            <div>
            <img src={data.cover} alt="" className='cover2' />
            </div>
            <div className='Book2'>
                <h1 className='title2'>{data.title}</h1>

                <h2 className='author2'>Author : <span className='auth2'>{data.author}</span></h2>
                
                <p className='decp2'> Description : </p>
                <span className='decp3'>{data.desc}</span>
                <hr />
                <h2 className='genre2'>Genre : {data.genre}</h2>
                <hr/>
                <h3 className='rate2'>Rating : {data.rating} stars</h3>
            </div>
                </div>
            <div className='part3'>
            
           {review.length==0?<h1>No review.</h1>:<Review Data={review}/>} 
           
            </div>
            <Feedback Gid={id}/>
            
            
            </div>}
      
    </div>
  )
}

export default Second
