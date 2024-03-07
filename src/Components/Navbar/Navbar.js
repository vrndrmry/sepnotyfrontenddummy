import React from 'react'
import sepnotyLogo from '../assets/navbar/sepnotyLogo.svg'
import './navbar.css'
export default function Navbar() {
  return (
    <nav>
        <div className='logo'>
        <img src={sepnotyLogo} alt="" />
        </div>
        <div className='title'>
         <ul>
          <li>About Us</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Career Opportunities</li>
          <li>Resource Center</li>
          <li>Contact Us</li>
         </ul>
        </div>
    </nav>
  )
}
