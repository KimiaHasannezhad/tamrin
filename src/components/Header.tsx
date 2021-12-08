import React from 'react'
import { Link } from 'react-router-dom'
import home from '../assets/icons/home.svg'
import bell from '../assets/icons/bell.svg'
import people from '../assets/icons/people.svg'
import logo from '../assets/icons/logo.svg'

const Header = () => {
  return (
    <div className="header-section-parent bg-white dir-rtl padding-20 position-fixed d-flex flex-dir-row">
      <div className="header-section w-30 ">
        <Link to="/home">
          <img src={logo}></img>
        </Link>
      </div>

      <div className="header-menu d-flex flex-dir-row w-70">
      <Link className="w-3" to="#"><img  src={home}></img></Link> 
      <Link className="w-3" to="#"><img  src={bell}></img></Link> 
      <Link className="w-3" to="#"><img  src={people}></img></Link>
      </div>
    </div>
  )
}

export default Header
