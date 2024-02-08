import React from 'react'
import Style from '../Header/Header.module.css'
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <>
    <nav className={`navbar position-fixed navbar-expand-lg navbar-light ${Style.navsection}`}>
  <div className="container">
    <a className={`navbar-brand ${Style.logoName}`} href="#">Form</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${Style.navbar}`} id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link to ="/curd" className={`nav ${Style.navName}`} aria-current="page" href="#">Curd-Page</Link>
        </li>
        <li className="nav-item">
          <Link to ="/registration" className={`nav ${Style.navName}`} aria-current="page" href="#">IN-LINE</Link>
        </li>
        <li className="nav-item">
          <Link to ="/alert"className={`nav ${Style.navName}`}  aria-current="page" href="#">ALERT</Link>
        </li>
        <li className="nav-item">
          <Link to ="/" className={`nav ${Style.navName}`}  aria-current="page" href="#">LogIn</Link>
        </li>
       
      </ul>
    </div>
   
  </div>
</nav>
    </>
  )
}

export default Header
