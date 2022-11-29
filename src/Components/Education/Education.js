import React from "react";
import * as ReactRedux from "react-redux";
import style from "./Education.module.css";

function Education({ institution, titulo, time, where }) {
  const theme = ReactRedux.useSelector((state) => state.theme);
  return (
    <div
      className={theme === "light" ? style.educationDiv : style.educationDivD}
    >
      <span
        className={theme === "light" ? style.institution : style.institutionD}
      >
        {institution}
      </span>
      <span className={style.titulo}>{titulo}</span>
      <span className={style.time}>{time}</span>
      <span className={style.where}>{where}</span>
    </div>
  );
}

export default Education;
