import React from 'react'
import * as ReactRedux from "react-redux";
import { changeTheme } from '../../Redux/Actions/Actions';
import style from "./Switch.module.css"
import { IoIosPower } from "react-icons/io";

// {theme==="light"?("Light"):("Dark")}

function Switch() {
    const theme = ReactRedux.useSelector((state) => state.theme);
    const dispatch = ReactRedux.useDispatch();
    const toggleTheme = () => {
        dispatch(changeTheme(theme==="light"?"dark":"light"));
      };

console.log(theme)

  return (
    <div className={theme === "light" ? style.switch : style.switchD} onClick={toggleTheme}>
        
        <div><IoIosPower className={theme === "light" ? style.btn : style.btnD}/></div>

    </div>
  )
}

export default Switch