import React from 'react'
import './Dashboard.css'
import {Link, Outlet} from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='main'>
     <div className="left">
        <Link to='/addStudent'>Add Student</Link>
        <Link to='/studentList'>Student List</Link>
     </div>
     <div className="right">
        <Outlet/>
     </div>
    </div>
  )
}

export default Dashboard
