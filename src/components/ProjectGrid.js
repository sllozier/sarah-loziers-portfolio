import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const ProjectGrid = () => {

 
   

    return(
        <section className="section projects is-medium has-background-white has-text-centered has-border-top">
            <div className="container is-narrow">
                <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">My Recent Projects</h1>
                <h2 className="subtitle has-text-black is-size-5-desktop">
                    These are a few of my full-stack applications. Let me know if you want to see more.
                    <a className="has-text-weight-normal" href="mailto:sarah.lozier@gmail.com"> Email me</a>
                    </h2>
            <div className="project-grid">
                <div className="columns is-vcentered is-multiline is-mobile">
                <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                    <figure className="image is-3by2 hovereffect">
                        <img className="project-thumb" src="/piccies/schoolManagement.png"/>
                        
                        <figcaption>
                        <div className="overlay">
                            <h2 className="title is-size-5 is-size-4-widescreen">Student and campus tracking system.</h2>
                            <a className="button is-danger is-outlined is-rounded" href="https://lozier-school-management.herokuapp.com" target="_blank">
                                <span>Visit Website</span>
                                <span className="icon">
                                    <i className="fa-solid fa-angle-right is-link">
                                        </i>
                                </span>
                                </a>
                                </div>
                        </figcaption>
                    </figure>
                </div>
                <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                    <figure className="image is-3by2 hovereffect">
                        <img className="project-thumb" src="/piccies/emotionFlash.png"/>
                        <figcaption>
                        <div className="overlay">
                            <h2 className="title is-size-5 is-size-4-widescreen">Emotion Flashcards.</h2>
                            <a className="button is-danger is-outlined is-rounded" href="https://emotion-flashcards.herokuapp.com/" target="_blank">
                                <span>Visit Website</span>
                                <span className="icon">
                                    <i className="fa-solid fa-angle-right is-link">
                                        </i>
                                </span>
                                </a>
                                </div>
                        </figcaption>
                    </figure>
                </div>
                <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                    <figure className="image is-3by2 hovereffect">
                        <img className="project-thumb" src="/piccies/eComm.png"/>
                        <figcaption>
                        <div className="overlay">
                            <h2 className="title is-size-5 is-size-4-widescreen">E-Commerce Site.</h2>
                            <a className="button is-danger is-outlined is-rounded" href="https://lozier-ecommerce-site.herokuapp.com/" target="_blank">
                                <span>Visit Website</span>
                                <span className="icon">
                                    <i className="fa-solid fa-angle-right is-link">
                                        </i>
                                </span>
                                </a>
                                </div>
                        </figcaption>
                    </figure>
                </div>
                </div>
            </div>
            <div className='columns is-centered'>
                <div className='column'>
                    <Link className="button is-primary is-outlined is-rounded is-medium has-text-weight-normal" to="/projectList">
                        <span>See Project Details</span>
                        <span className="icon">
                                    <i className="fa-solid fa-angle-right is-link">
                                        </i>
                                </span>
                    </Link>
                </div>
            </div>
            </div>
            </section>
    )

};

export default ProjectGrid;