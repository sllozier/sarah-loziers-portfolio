import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  });

  return (
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <Link className="image is-64x64" to="/">
            <img src="/piccies/lozier-logo.svg" alt="Logo" />
          </Link>
          <Link
            role="button"
            className="navbar-burger"
            data-target="navbarMenuHeroC"
            to="/contactForm"
          >
            <span></span>
            <span></span>
            <span></span>
          </Link>
        </div>
        <div id="navbarMenuHeroC" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item is-active">
              <Link
                to="/contactForm"
                className="button is-active is-danger is-outlined is-rounded has-text-weight-normal"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
