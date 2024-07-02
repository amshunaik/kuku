import React from 'react'
import './Review.css'
const Review = (props) => {
    const dt=props.Data;
  return (
    <div>
       <h1 className='p3'>Reviews</h1>
        <div className='rev3'>
            {dt.map((m)=>(
                <div className='r1' >
                    <div className='user_Info'>
                    <h1 className='name3'>{m.name}  |  {m.date}</h1>
                    
                    <h2 className='rate3'>Rated :<span className='stars'> {m.rate}/5 stars</span>
                    </h2>
                    </div>
                    <div className='user_comment'>
                    <p className='comt3'>{m.comment}</p>
                    </div>
                    </div>
            ))}

        </div>
      
    </div>
  )
}

export default Review
