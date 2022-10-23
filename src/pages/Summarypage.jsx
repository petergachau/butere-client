import React from 'react'
import About from './About'
import Academics from './Academics'
import Library from './Library'
import Contact from './Contact'
import TenderS from './Tenders'
import {Link} from 'react-router-dom';
import './Summarypage.css'

function Summarypage(props) {
  
  return (
    <div className='information'>
      <li className='lists'>
        <ul>
      <div className='otherinfo'>
      <h1 className='heading'>Quicklinks</h1>
      
      <p><Link to="/About" >About</Link> </p> 
      <p><Link to="/Academics" >Academics</Link></p>
      <p><Link to="/Library" >Library</Link></p>
      <p><Link to="/Contact" >Contact</Link></p>
      <p><Link to="/Tenders" >Tenders</Link></p>
      {/* <Link to="/" >Teachers</Link>
      <Link to="/" >Students</Link>
      <Link to="/" >Staffs</Link> */}
    </div>
    </ul>
    <ul>
      
    <div className='otherinfo'>
    <h1 className='heading'>Subjects</h1>
      
      <p>English</p>
      <p>Kiswahili</p>
      <p>Maths</p>
      <p>Chemistry</p>
      <p>Physicx</p>
      <p>Biology</p>
      <p>Geography</p>
      <p>History</p>
      <p>Business</p>
    </div>
    </ul>
     <ul>
    <div className='otherinfo'>
    
    </div>
    </ul> 
    </li>
    </div>
    
  )
}

export default Summarypage