import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <div  style={{position:"sticky", top:"0", backgroundColor:"#F2F2F2"}} >
      <nav className="default-margin">
      <div className="container">
        <div className="logo">KHIZAR</div>

        {/* Input should be self-closing */}
        <input type="checkbox" id="check" />

        <div className="links">
          <ul>
            <li><NavLink  to="/Myintro" className={({ isActive }) => 
    `hover-underline-animation ${isActive ? "active-link" : ""}`
  } >My Intro</NavLink></li>
            <li><NavLink  to="/about" className={({ isActive }) => 
    `hover-underline-animation ${isActive ? "active-link" : ""}`
  }>About</NavLink></li>
            <li><NavLink  to="/experience"className={({ isActive }) => 
    `hover-underline-animation ${isActive ? "active-link" : ""}`
  } >Experience</NavLink></li>
            <li><NavLink to="/contact"   className={({ isActive }) => 
    `hover-underline-animation ${isActive ? "active-link" : ""}`
  }>Contact</NavLink></li>
          </ul>
        </div>

        
      <label htmlFor="check" className="hamburger">
        <FontAwesomeIcon icon={faBars} />
      </label>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
