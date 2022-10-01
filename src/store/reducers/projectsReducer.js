import axios from 'axios';

const GET_PROJECTS = 'GET_PROJECTS';


export const getProjects = (data) => {
    return{
        type: GET_PROJECTS,
        projects: data,
    };
};

export const getProjectsThunk = () => {
    return async(dispatch) => {
        try{
            const projects = await axios.get('/api/projects');
            dispatch(getProjects(projects.data))
        }catch(error){
            console.log('GET PROJECTS THUNK ERROR ', error)
        }
    };
};

export default function projectsReducer (state = [], action) {
    switch(action.type){
        case GET_PROJECTS:
            return action.projects;
        default:
            return state;
    }
}