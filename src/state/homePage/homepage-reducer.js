import * as actionTypes from "./homepage-types";

const INITIAL_STATE = {
  homePageLoaded: false,
};

const homePageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.HOME_PAGE_LOADED:
      return {
        ...state,
        homePageLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default homePageReducer;
