import React from 'react'
import { Outlet } from 'react-router-dom'
import First from './First'

const Root = () => {
  return (
    <div>
        <Outlet/>
      
    </div>
  )
}

export default Root
