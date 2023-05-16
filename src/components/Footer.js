import React from "react";

// Add a link for my resume

const Footer = () => {
  return (
    <footer className="section is-primary is-small has-text-centered">
      <div className="container is-narrow">
        <div className="columns is-centered">
          <div className="column is-1">
            <a className="image is-square" href="/">
              <img src="/piccies/lozier-logo.svg" alt="Logo" />
            </a>
          </div>
        </div>

        <div className="columns is-centered">
          <div className="column is-one-third">
            <h1 className="subtitle has-text-white is-size-4-touch has-text-weight-normal">
              Coding for a better world.
            </h1>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third">
            <span className="icon is-medium mx-2">
              <a
                className="button-is-medium"
                href="https://www.linkedin.com/in/sarah-l-lozier/"
                target="_blank"
              >
                <i className="has-text-danger fa-brands fa-linkedin fas fa-2x"></i>
              </a>
            </span>
            <span className="icon is-medium mx-2">
              <a
                className="button-is-medium"
                href="mailto:sarah.lozier@gmail.com"
                target="_blank"
              >
                <i className="has-text-danger fa-solid fa-envelope fas fa-2x"></i>
              </a>
            </span>
            <span className="icon is-medium mx-2">
              <a
                className="button-is-medium"
                href="https://github.com/sllozier"
                target="_blank"
              >
                <i className="has-text-danger fa-brands fa-github fas fa-2x"></i>
              </a>
            </span>
          </div>
        </div>

        <div className="copyright">
          <span className="icon is-small mx-2">
            <i className="fa-regular fa-heart"></i>
          </span>
          Made by yours-truly
          <span className="icon has-white-text mx-2">
            <i className="fa-solid fa-copyright"></i>
          </span>
          2022
        </div>
        <div className="made-by-bulma">
          <a href="https://bulma.io">
            <img
              src="https://bulma.io/images/made-with-bulma--white.png"
              alt="Made with Bulma"
              width="163"
              height="31"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
