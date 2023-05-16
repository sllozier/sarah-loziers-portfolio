import React from "react";

// Add link to resume

const EmailConfirmation = () => {
  return (
    <section className="hero is-warning is-fullheight has-text-centered splash">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-three-fifths">
              <img className="avatar" src="/piccies/hero-image.png" alt="" />
              <h1 className="title has-text-info is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
                Email recieved. Thanks!
              </h1>
              <h2 className="subtitle has-text-info is-size-4-desktop">
                I'll email you shortly and find a time to chat!
              </h2>
              <a
                className="button is-primary is-outlined is-medium is-rounded mt-5 has-text-weight-medium"
                href="/"
              >
                Head back home
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailConfirmation;
