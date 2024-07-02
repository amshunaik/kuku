import React from 'react'
import './SearchBox.css'
const SearchBox = (props) => {
  return (
    <div>
        <input className='in1' type="text" value={props.val} onChange={(e)=>props.setval(e.target.value)} />
      
    </div>
  )
}

export default SearchBox
