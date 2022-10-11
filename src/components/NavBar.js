import React from "react";
import { Link } from "react-router-dom";



const NavBar = () => {


return(

    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <Link className="image is-64x64" to="/">
            <img  src="/piccies/lozier-logo.svg" alt="Logo"/>
          </Link>
          <span className="navbar-burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroC" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item is-active">
              <Link to="/contactForm" className='button is-active is-danger is-outlined is-rounded has-text-weight-normal'>Contact Me</Link>
          </div>
        </div>
      </div>
      </div>
    </nav>


)

};

export default NavBar;