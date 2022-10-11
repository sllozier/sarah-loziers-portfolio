import React from "react";

const ProjectList = () => {

    return(
        <>
         <section className="section projects is-medium  has-background-white has-text-centered has-border-top">
         <div className="project-grid">
        <div className="columns is-vcentered is-multiline is-mobile">
        <div className="column is-full has-text-black">
            <div className="columns is-mobile">
                <div className="column is-half">
                    Project Details
                </div>
                <div className="column is-half">
                Project Image
                </div>
            </div>
        </div>
        <div className="column is-full has-text-black">
        <div className="columns is-mobile">
                <div className="column is-half">
                Project Image
                </div>
                <div className="column is-half">
                Project Details
                </div>
            </div>
        </div>
        <div className="column is-full has-text-black">
        <div className="columns is-mobile">
                <div className="column is-half">
                Project Details
                </div>
                <div className="column is-half">
                Project Image
                </div>
            </div>
        </div>
        </div>
        </div>
    </section>
        
        </>
    )
};

export default ProjectList;