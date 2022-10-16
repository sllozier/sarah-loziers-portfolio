import React, { useEffect } from "react";
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
            duration: 2000,
        });
    }, []);
//add turnary data-aos ? project.id % 2 === 0 ? fade-up left : fade up right : project.image 
//maybe set state and then call onChange inside of data-aos?
    return(
        <>
        <section className="hero is-large  has-background-white has-text-centered has-border-top">
            {projectList
            ? projectList.map((project) => (
            <><div class="tile is-ancestor" key={`${project.id}`}>
                    <div className="tile is-12 is-parent">
                        <div class="tile is-6 is-child">
                        <div className="media" data-aos={'fade-up-left'}>
                <figure className='media-left image is-64x64'>
                    <img  src={`${project.image}`}/>
                </figure>
                </div>
                        </div>
                        <div class="tile is-6 is-child">
                        <div className="media-content">
                <div className="content">
                    <h3>{`${project.title}`}</h3>
                </div>
                </div>
                        </div>
                    </div>
                </div></>
 ))
 :null}
      </section>      

            









         {/* {projectList
            ? projectList.map((project) => (
         <section className="section is-medium  has-background-white has-text-centered has-border-top" key={`${project.id}`}>
        
         
        <div className="level" >
        <div className="level-item has-text-centered" >
        <div className="media" data-aos={'fade-up-left'}>
                <figure className='media-left image is-64x64'>
                    <img  src={`${project.image}`}/>
                </figure>
                </div>
                </div>
                <div className="level-item has-text-centered">
                <div className="media-content">
                <div className="content">
                    <h3>{`${project.title}`}</h3>
                </div>
                </div>
        </div>
        </div>
        <div className="level" >
        <div className="level-item has-text-centered">
        <div className="media" data-aos={'fade-up-right'}>
        <figure className='media-right image is-64x64'>
            <img src={`${project.image}`}/>
        </figure>
        </div>
        <div className="level-item has-text-centered">
        <div className="media-content">
        <div className="content">
        <h3>{`${project.title}`}</h3>
        </div>
             </div>
        </div>
            </div>

        </div>
        
        <div className="level" >
        <div className="level-item has-text-centered">
        <div className="media" data-aos={'fade-up-left'}>
                <figure className='media-left image is-64x64'>
                    <img src={`${project.image}`}/>
                </figure>
                </div>
        </div>
        <div className="level-item has-text-centered">
        <div className="media-content">
                <div className="content">
                <h3>{`${project.title}`}</h3>
                </div>
               </div>
        </div>
        </div>
    </section>
        ))
        :null} */}
        </>
    )
};

export default ProjectList;