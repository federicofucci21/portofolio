import React from 'react'
import * as ReactRedux from "react-redux";
import { changeLang } from '../../Redux/Actions/Actions';
import style from "./LangBtn.module.css"


function LangBtn() {
    const lang = ReactRedux.useSelector((state) => state.lang);
    const dispatch = ReactRedux.useDispatch();
    const toggleTheme = () => {
        dispatch(changeLang(lang==="eng"?"esp":"eng"));
      };



  return (
    <div className={style.switch} onClick={toggleTheme}>
        
        <div>{lang==="eng"?("Eng"):("Esp")}</div>

    </div>
  )
}

export default LangBtn