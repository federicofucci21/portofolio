/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import * as ReactRedux from "react-redux";
import { IoIosPower } from "react-icons/io";
import { changeTheme } from "../../Redux/Actions/Actions";
import style from "./Switch.module.css";

function Switch() {
  const theme = ReactRedux.useSelector((state) => state.theme);
  const dispatch = ReactRedux.useDispatch();
  const toggleTheme = () => {
    dispatch(changeTheme(theme === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={theme === "light" ? style.switch : style.switchD}
      onClick={toggleTheme}
    >
      <div>
        <IoIosPower className={theme === "light" ? style.btn : style.btnD} />
      </div>
    </div>
  );
}

export default Switch;
