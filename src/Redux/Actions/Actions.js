export const changeTheme = (payload) => {
    console.log(payload)
    return {
      type: "CHANGE_THEME",
      payload: payload,
    };
  };

  export const changeLang = (payload) => {
    return {
      type: "CHANGE_LANG",
      payload: payload,
    };
  };
  
  export const changeOpenMenu = () => {
    return {
      type: "CHANGE_OPENMENU"
    };
  };