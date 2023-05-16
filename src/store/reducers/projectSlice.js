import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const projectSlice = createSlice({
  name: "projectSlice",
  initialState: {
    projectList: [],
    projectData: {},
  },
  reducers: {
    getProjectList: (state, action) => {
      state.projectList = action.payload;
      return state;
    },
    getProjectData: (state, action) => {
      state.projectData = action.payload;
      return state;
    },
    setErrorMsg: (state, action) => {
      state.errorMsg = action.payload;
      return state;
    },
  },
});

export default projectSlice.reducer;
export const { getProjectList, getProjectData, setErrorMsg } =
  projectSlice.actions;

export const fetchProjects = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/projects");
    dispatch(getProjectList(data));
  } catch (error) {
    console.log("FETCH PROJECTS ERROR", error);
  }
};

export const fetchProjectData = (projectId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/projects/${projectId}`);
    dispatch(getProjectData(data));
  } catch (error) {
    console.log("FETCH SINGLE PROJECT ERROR", error);
  }
};
