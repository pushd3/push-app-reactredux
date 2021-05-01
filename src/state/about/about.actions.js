export const ABOUT_PAGE_LOADED = "ABOUT_PAGE_LOADED";

export const aboutPageLoaded = (isLoaded) => {
    return {
      type: ABOUT_PAGE_LOADED,
      payload: {
        isLoaded: isLoaded,
      },
    };
  };
  