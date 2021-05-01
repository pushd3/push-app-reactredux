import * as actionTypes from "./homepage-types";

export const homePageLoaded = (isLoaded) => {
  return {
    type: actionTypes.ABOUT_PAGE_LOADED,
    payload: {
      isLoaded: isLoaded,
    },
  };
};