import React from "react";



const NavBar = () => {


return(

    <header className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-logo" href="/projects">
            <img className="logo" src="/piccies/lozier.png" alt="Logo"/>
          </a>
          <span className="navbar-burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroC" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item is-active">
              <a className='button is-danger is-outlined is-rounded has-text-weight-normal' href="/contact">Contact Me</a>
          </div>
        </div>
      </div>
      </div>
    </header>


)

};

export default NavBar;