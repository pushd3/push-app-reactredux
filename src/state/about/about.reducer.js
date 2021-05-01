import * as actionTypes from "./about.actions";

const stackList = [
  "Angular",
  "React",
  "Web components",
  "Polymer",
  "HTML, CSS, Javascript",
  "Typescript",
  "Azure basics",
  "GCP basics",
  "Bootstrap",
];
const INITIAL_STATE = {
  aboutPageLoaded: false,
  stackList: [],
};

const aboutPageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ABOUT_PAGE_LOADED:
      return {
        ...state,
        stackList: action.payload ? stackList : [],
      };
    default:
      return state;
  }
};

export default aboutPageReducer;
