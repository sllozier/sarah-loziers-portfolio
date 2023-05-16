import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTech } from "../store/reducers/techSlice";

const Technologies = () => {
  const dispatch = useDispatch();
  const tech = useSelector((state) => state.tech.techList);

  useEffect(() => {
    dispatch(fetchTech());
  }, [dispatch]);
  const devOps = tech.filter((singleTech) => {
    if (singleTech.category === "DevOps") return singleTech;
  });

  const core = tech.filter((singleTech) => {
    if (singleTech.category === "Core") return singleTech;
  });

  const cloud = tech.filter((singleTech) => {
    if (singleTech.category === "Cloud") return singleTech;
  });

  const frontEnd = tech.filter((singleTech) => {
    if (singleTech.category === "Frontend") return singleTech;
  });

  const mobile = tech.filter((singleTech) => {
    if (singleTech.category === "Mobile") return singleTech;
  });
  const testing = tech.filter((singleTech) => {
    if (singleTech.category === "Testing") return singleTech;
  });

  const misc = tech.filter((singleTech) => {
    if (singleTech.category === "Misc") return singleTech;
  });

  const future = tech.filter((singleTech) => {
    if (singleTech.category === "Future") return singleTech;
  });

  console.log("TECHNOLOGIES", tech);
  return (
    <section className="section skills has-text-centered">
      <div className="container is-narrow">
        <div className="box">
          <div className="content">
            <div className="columns is-centered">
              <div className="column is-one-third">
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
                {devOps.map((single) => (
                  <p className="mx-3 is-size-5">
                    <a
                      className="button-is-medium"
                      href={single.link}
                      target="_blank"
                    >
                      <img src={single.image} />
                    </a>
                  </p>
                ))}
              </div>
              <div className="column is-one-third">
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
                  My Tech Stack:
                </p>
                <div className="columns is-centered">
                  <div className="column is-one-third">
                    <p className="mx-3 is-size-5">CORE</p>
                    {core.map((single) => (
                      <p>
                        <a
                          className="button-is-medium"
                          href={single.link}
                          target="_blank"
                        >
                          <img src={single.image} />
                        </a>
                      </p>
                    ))}
                  </div>
                  <div className="column is-one-third">
                    <p className="mx-3 is-size-5">Frontend</p>
                    {frontEnd.map((single) => (
                      <p>
                        <a
                          className="button-is-medium"
                          href={single.link}
                          target="_blank"
                        >
                          <img src={single.image} />
                        </a>
                      </p>
                    ))}
                  </div>
                  <div className="column is-one-third">
                    <p className="mx-3 is-size-5">Cloud</p>
                    {cloud.map((single) => (
                      <p>
                        <a
                          className="button-is-medium"
                          href={single.link}
                          target="_blank"
                        >
                          <img src={single.image} />
                        </a>
                      </p>
                    ))}
                    <p className="mx-3 is-size-5">Mobile</p>
                    {mobile.map((single) => (
                      <p>
                        <a
                          className="button-is-medium"
                          href={single.link}
                          target="_blank"
                        >
                          <img src={single.image} />
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="column">
                <span className="fa-stack fa-2x">
                  <i className="fa-solid fa-circle fa-stack-2x has-text-success"></i>
                  <i className="fa-layer-plus fa-stack has-text-black fa-1x fa-brands fa-hive"></i>
                </span>
                <h1 className="title has-text-black is-size-4 is-spaced">
                  Driven Learner
                </h1>
                <p className="mx-4">
                  I am passionate about engineering for the greater-good.
                </p>
                <p className="title has-text-primary is-size-4">Extra Bits</p>
                <div className="columns is-centered">
                  <div className="column is-one-third">
                    <p className="mx-3 is-size-5">Testing</p>
                    {testing.map((single) => (
                      <p>
                        <a
                          className="button-is-medium"
                          href={single.link}
                          target="_blank"
                        >
                          <img src={single.image} />
                        </a>
                      </p>
                    ))}
                  </div>
                  <div className="column is-one-third">
                    <p className="mx-3 is-size-5">Misc</p>
                    {misc.map((single) => (
                      <p>
                        <a
                          className="button-is-medium"
                          href={single.link}
                          target="_blank"
                        >
                          <img src={single.image} />
                        </a>
                      </p>
                    ))}
                  </div>
                  <div className="column is-one-third">
                    <p className="mx-3 is-size-5">Future Competencies</p>
                    {future.map((single) => (
                      <p>
                        <a
                          className="button-is-medium"
                          href={single.link}
                          target="_blank"
                        >
                          <img src={single.image} />
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
