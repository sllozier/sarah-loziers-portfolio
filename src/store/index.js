import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import projectsReducer from "./reducers/projectsReducer";
import singleProjectReducer from "./reducers/singleProjectReducer";
//import reducers here

const rootReducer = combineReducers({
  projects: projectsReducer,
  singleProject: singleProjectReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
