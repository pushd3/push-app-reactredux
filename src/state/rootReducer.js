import { combineReducers } from "redux";

import homePageReducer from "./homePage/homepage-reducer";
import aboutPageReducer from './about/about.reducer';

const rootReducer = combineReducers({
  homePage: homePageReducer,
  aboutPage: aboutPageReducer,
});

export default rootReducer;