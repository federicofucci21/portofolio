const initialState = {
  theme: "light",
  lang: "eng",
  openMenu: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_THEME": {
      return {
        ...state,
        theme: action.payload,
      };
    }
    case "CHANGE_LANG": {
      return {
        ...state,
        lang: action.payload,
      };
    }
    case "CHANGE_OPENMENU": {
      return {
        ...state,
        openMenu: !state.openMenu,
      };
    }

    default:
      return state;
  }
}

export default rootReducer;
