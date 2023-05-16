import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProjects } from "../store/reducers/projectSlice";

const ProjectGrid = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const projects = useSelector((state) => state.project.projectList);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  useEffect(() => {
    if (projects.length > 0) {
      setLoading(false);
    }
  }, [projects]);

  console.log("PROJECT GRID", projects);
  const repos = projects.map((p) => p.repo);
  console.log("REPO", repos);
  return (
    <section className="section projects is-medium has-background-white has-text-centered has-border-top">
      <div className="container is-narrow">
        <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">
          My Recent Projects
        </h1>
        <h2 className="subtitle has-text-black is-size-5-desktop">
          These are a few of my full-stack applications. Let me know if you want
          to see more.
          <a
            className="has-text-weight-normal has-text-danger"
            href="mailto:sarah.lozier@gmail.com"
          >
            {" "}
            Email me
          </a>
        </h2>
        <div className="project-grid">
          <div className="columns is-vcentered is-multiline is-mobile">
            {projects.map((project) => (
              <div
                className="column is-12-mobile is-half-tablet is-one-third-desktop"
                key={project.id}
              >
                <figure className="image is-3by2 hovereffect">
                  <img className="project-thumb" src={project.image} />
                  {/* Change this to be a video on hover using : https://www.npmjs.com/package/react-hover-video-player 
              and https://codesandbox.io/s/hovervideoplayer-example-6y0fn?file=/src/PausedOverlay.js */}
                  <figcaption>
                    <div className="overlay">
                      {/* <h2 className="title is-size-5 is-size-4-widescreen">
                      Student and campus tracking system
                    </h2> */}
                      <a
                        className="info button is-link is-outlined is-rounded"
                        href={project.repo}
                        target="_blank"
                      >
                        {/* Change this to be a small arrow icon that goes to individual project description and
                        holds the links for each project there. */}
                        <span>Visit Website</span>
                        <span className="icon">
                          <i className="fa-solid fa-angle-right is-link"></i>
                        </span>
                      </a>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
