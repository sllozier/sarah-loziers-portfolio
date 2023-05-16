import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const techSlice = createSlice({
  name: "techSlice",
  initialState: {
    techList: [],
    techData: {},
  },
  reducers: {
    getTechList: (state, action) => {
      state.techList = action.payload;
      return state;
    },
    getTechData: (state, action) => {
      state.techData = action.payload;
      return state;
    },
    setErrorMsg: (state, action) => {
      state.errorMsg = action.payload;
      return state;
    },
  },
});

export default techSlice.reducer;
export const { getTechList, getTechData, setErrorMsg } = techSlice.actions;

export const fetchTech = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/tech");
    dispatch(getTechList(data));
  } catch (error) {
    console.log("FETCH TECH ERROR", error);
  }
};

export const fetchTechData = (techId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/tech/${techId}`);
    dispatch(getTechData(data));
  } catch (error) {
    console.log("FETCH TECH DATA ERROR", error);
  }
};
