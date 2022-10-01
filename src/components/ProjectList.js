import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProjectsThunk } from '../store/reducers/projectsReducer';


const ProjectList = () => {
    const dispatch = useDispatch();

    const allProjects = useSelector(state => state.projects);

    useEffect(() => {
        dispatch(getProjectsThunk());
    }, []);

    return(
        <div>
            {allProjects 
            ? allProjects.map((project) => (
                <div>
                    <h3>{project.title}</h3>
                    <img src={project.image}/>
                    <h5>{project.gitHub}</h5>
                    <h5>{project.heroku}</h5>
                </div>
            ))
        :null}
        </div>
    )

};

export default ProjectList;