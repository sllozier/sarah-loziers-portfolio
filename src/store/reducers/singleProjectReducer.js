import axios from 'axios';

const SET_PROJECT = 'SET_PROJECT';

export const setProject = (data) => {
    return {
      type: SET_PROJECT,
      singleProject: data,
    };
  };

export const setSingleProjectThunk = (id) => {
    return async(dispatch) => {
        try{
            const singleProject = await axios.get(`/api/projects.${id}`);
            dispatch(setProject(singleProject));
        }catch(error){
            console.log('SINGLE PROJECT THUNK ERROR ', error);
        }
    };
};

export default function singleProjectReducer (state ={}, action) {
    switch(action.type){
        case SET_PROJECT:
            return action.singleProject;
        default:
            return state;
    }
}