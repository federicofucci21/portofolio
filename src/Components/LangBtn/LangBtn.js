import React from 'react'
import * as ReactRedux from "react-redux";
import { changeLang } from '../../Redux/Actions/Actions';
import style from "./LangBtn.module.css"


function LangBtn() {
    const lang = ReactRedux.useSelector((state) => state.lang);
    const theme = ReactRedux.useSelector((state) => state.theme);
    const dispatch = ReactRedux.useDispatch();
    const toggleTheme = () => {
        dispatch(changeLang(lang==="eng"?"esp":"eng"));
      };



  return (
    <div className={theme === "light" ? style.switch : style.switchD} onClick={toggleTheme}>
        
        <div>{lang==="eng"?("En"):("Es")}</div>

    </div>
  )
}

export default LangBtn