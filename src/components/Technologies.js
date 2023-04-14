import React from "react";

const Technologies = () => {
  return (
    <section className="section skills has-text-centered">
      <div className="container is-narrow">
        <div className="box">
          <div className="content">
            <div className="columns is-centered">
              <div className="column">
                <span className="fa-stack fa-2x">
                  <i className="fa-solid fa-circle fa-stack-2x has-text-success"></i>
                  <i className="fa-layer-plus fa-stack has-text-black fa-1x fa-solid fa-hand-holding-hand"></i>
                </span>
                <h1 className="title has-text-black is-size-4 is-spaced">
                  Collaborator
                </h1>
                <p className="mx-4">
                  I genuinely enjoy working with a team of developers producing
                  creative designs.
                </p>
                <p className="title has-text-primary is-size-4">Team Tools:</p>
                <p className="mx-3 is-size-5">
                  Git, Zoom, Google Meet, Slack, Google Docs, Google Spaces
                </p>
              </div>
              <div className="column">
                <span className="fa-stack fa-2x">
                  <i className="fa-solid fa-circle fa-stack-2x has-text-success"></i>
                  <i className="fa-layer-plus fa-stack has-text-black fa-1x fa-solid fa-laptop-code"></i>
                </span>
                <h1 className="title has-text-black is-size-4 is-spaced">
                  Full Stack Developer
                </h1>
                <p className="mx-4">
                  I love bringing ideas to reality, and geek out on back-end
                  structure and design.
                </p>
                <p className="title has-text-primary is-size-4">
                  My Languages:
                </p>
                <p className="mx-3 is-size-5">
                  JS, HTML, CSS, SASS, REACT, PSQL
                </p>
              </div>
              <div className="column">
                <span className="fa-stack fa-2x">
                  <i className="fa-solid fa-circle fa-stack-2x has-text-success"></i>
                  <i className="fa-layer-plus fa-stack has-text-black fa-1x fa-brands fa-hive"></i>
                </span>
                <h1 className="title has-text-black is-size-4 is-spaced">
                  Non-Profit Interests
                </h1>
                <p className="mx-4">
                  I am passionate about engineering for the greater-good.
                </p>
                <p className="title has-text-primary is-size-4">
                  Future Projects:
                </p>
                <p className="mx-3 is-size-5">
                  Updated Amber Alert, Agricultural Tech, Neuro-Diverse
                  Education Tools, Medical Outreach, Veteran's Social Networking
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
