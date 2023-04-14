import React from "react";

import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <>
      <section className="hero is-white has-text-centered is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-centered">
              <div className="column">
                <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
                  Sarah Lozier
                </h1>
                <h2 className="subtitle  is-size-4-tablet">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("Full Stack Web Developer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("I build cool things.")
                        .start();
                    }}
                  />
                </h2>
                <img className="avatar" src="/piccies/sarahAvatar.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth">
            <div className="container">
              <img className="is-bottom" src="/piccies/hero-image.png" alt="" />
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Hero;
