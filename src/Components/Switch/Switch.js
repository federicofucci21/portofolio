import React from 'react'
import * as ReactRedux from "react-redux";
import { changeTheme } from '../../Redux/Actions/Actions';
import style from "./Switch.module.css"


function Switch() {
    const theme = ReactRedux.useSelector((state) => state.theme);
    const dispatch = ReactRedux.useDispatch();
    const toggleTheme = () => {
        dispatch(changeTheme(theme==="light"?"dark":"light"));
      };

console.log(theme)

  return (
    <div className={style.switch} onClick={toggleTheme}>
        
        <div>{theme==="light"?("Light"):("Dark")}</div>

    </div>
  )
}

export default Switch