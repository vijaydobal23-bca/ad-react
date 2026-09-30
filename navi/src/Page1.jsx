import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Page1 = () => {
  return (  
    <div>
      <Link to="/page1/child">move to child</Link>

      <Outlet/>
    </div>
  )
}

export default Page1
