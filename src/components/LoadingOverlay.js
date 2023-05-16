import React from "react";

const LoadingOverlay = () => {
  return (
    <div className="loading-overlay">
      <progress className="progress is-small is-primary" max="100"></progress>
    </div>
  );
};

export default LoadingOverlay;
