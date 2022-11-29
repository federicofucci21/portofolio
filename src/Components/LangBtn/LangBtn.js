import React from "react";
import * as ReactRedux from "react-redux";
import { changeLang } from "../../Redux/Actions/Actions";
import style from "./LangBtn.module.css";

function LangBtn() {
  const lang = ReactRedux.useSelector((state) => state.lang);
  const theme = ReactRedux.useSelector((state) => state.theme);
  const dispatch = ReactRedux.useDispatch();
  const toggleTheme = () => {
    dispatch(changeLang(lang === "eng" ? "esp" : "eng"));
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
    <div
      className={theme === "light" ? style.switch : style.switchD}
      onClick={toggleTheme}
    >
      <div>{lang === "eng" ? "En" : "Es"}</div>
    </div>
  );
}

export default LangBtn;
