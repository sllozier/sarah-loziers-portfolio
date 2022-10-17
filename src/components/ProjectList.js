import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import AOS from 'aos';
import { getProjectsThunk } from "../store/reducers/projectsReducer";

const ProjectList = () => {
    const dispatch = useDispatch();
    const projectList = useSelector((state) => state.projects);
   
    console.log(projectList)

    useEffect(() => {
        dispatch(getProjectsThunk());
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 3000,
        });
    }, []);
  
  return (
    <section className="section is-large has-background-white has-text-centered has-border-top">
        {projectList ?
        projectList.map((project) => (
            project.id % 2 === 0 ? (
                <div className="tile is-ancestor mg-large">
                    <div className="tile is-12">
                        <div className="tile is-parent">
                            <article className="tile is-child ">
                                <div className="image" data-aos={'fade-up-left'}>
                                    <figure className='image is-2x1'>
                                        <img src={`${project.image}`}/>
                                    </figure>
                                </div>
                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child ">
                                <div className="media-content">
                                    <div className="content">
                                        <h3>{`${project.title}`}</h3>
                                        <p>{`${project.description}`}</p>
                                        <p>{`${project.gitHub}`}</p>
                                        <p>{`${project.heroku}`}</p>
                                        <p>{`${project.techUsed}`}</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            ): (
                <div className="tile is-ancestor mg-large" >
                    <div className="tile is-12">
                        <div className="tile is-parent">
                            <article className="tile is-child ">
                                <div className="media-content">
                                    <div className="content">
                                        <h3>{`${project.title}`}</h3>
                                        <p>{`${project.description}`}</p>
                                        <p>{`${project.gitHub}`}</p>
                                        <p>{`${project.heroku}`}</p>
                                        <p>{`${project.techUsed}`}</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child ">
                                <div className="image" data-aos={'fade-up-right'}>
                                    <figure className='image is-2x1'>
                                        <img src={`${project.image}`}/>
                                    </figure>

                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            )
        ))
    :null}


    </section>
  )
            }

export default ProjectList;