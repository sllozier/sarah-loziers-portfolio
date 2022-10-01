import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProjectsThunk } from '../store/reducers/projectsReducer';



const ProjectGrid = () => {
    const dispatch = useDispatch();

    const allProjects = useSelector(state => state.projects);

    useEffect(() => {
        dispatch(getProjectsThunk());
    }, []);

    return(
        <section className="section projects is-medium has-background-white has-text centered">
            <div className="container is-narrow">
                <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">My Recent Projects</h1>
                <h2 className="subtitle is-size-5-desktop">
                    "These are a few of my full-stack applications. Let me know if you want to see more."
                    <a className="has-text-weight-normal" href="mailto:sarah.lozier@gmail.com">Email me</a>
                    "."</h2>
            <div className="project-grid">
                <div className="columns is-multiline is-mobile">
                <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                    <figure className="image is-3by2">
                        <img className="project-thumb" src="/piccies/schoolManagement.png"/>
                        <figcaption>
                            <h1 className="title is-size-5 is-size-4-widescreen">Student and campus tracking system.</h1>
                            <a className="button is-primary is-outlined is-rounded" href="https://lozier-school-management.herokuapp.com/" target="_blank">
                                <span>Visit Website</span>
                                <span className="icon">
                                    <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix='fas'
                                    data-icon="angle-right" role="img" xmins="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg>
                                        </svg>
                                </span>
                                </a>
                        </figcaption>
                        <div className="overlay"></div>
                    </figure>
                </div>
                <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                    <figure className="image is-3by2">
                        <img className="project-thumb" src="/piccies/schoolManagement.png"/>
                        <figcaption>
                            <h1 className="title is-size-5 is-size-4-widescreen">Student and campus tracking system.</h1>
                            <a className="button is-primary is-outlined is-rounded" href="https://lozier-school-management.herokuapp.com/" target="_blank">
                                <span>Visit Website</span>
                                <span className="icon">
                                    <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix='fas'
                                    data-icon="angle-right" role="img" xmins="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg>
                                        </svg>
                                </span>
                                </a>
                        </figcaption>
                        <div className="overlay"></div>
                    </figure>
                </div>
                <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                    <figure className="image is-3by2">
                        <img className="project-thumb" src="/piccies/schoolManagement.png"/>
                        <figcaption>
                            <h1 className="title is-size-5 is-size-4-widescreen">Student and campus tracking system.</h1>
                            <a className="button is-primary is-outlined is-rounded" href="https://lozier-school-management.herokuapp.com/" target="_blank">
                                <span>Visit Website</span>
                                <span className="icon">
                                    <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix='fas'
                                    data-icon="angle-right" role="img" xmins="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg>
                                        </svg>
                                </span>
                                </a>
                        </figcaption>
                        <div className="overlay"></div>
                    </figure>
                </div>
                </div>
            </div>
            </div>
            </section>
    )

};

export default ProjectGrid;