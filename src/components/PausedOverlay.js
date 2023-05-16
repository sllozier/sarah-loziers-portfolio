import React from "react";

const PausedOverlay = ({ project }) => {
  return (
    <figure image is-square>
      <img src={project.image} className="paused-overlay" />
    </figure>
  );
};

export default PausedOverlay;
