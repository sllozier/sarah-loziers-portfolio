import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setSingleProjectThunk } from "../store/reducers/singleProjectReducer";

const ProjectsTest = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const project = useSelector((state) => state.singleProject)

    useEffect(() => {
        dispatch(setSingleProjectThunk(params.id))
    }, []);

    console.log("PROJECTS TEST", project)
    return(
        <section className="section is-primary has-text-centered">
            <div className="container">
                <div className="columns level has-text-white">
                    <div className="column level-item">
                        <h1 className="title has-text-white">{project.title}</h1>
                    </div>
                    <div className="column level-item">
                        <figure className="image is-3by2">
                            <img className="project-thumb" src={`${project.image}`}/>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectsTest;
