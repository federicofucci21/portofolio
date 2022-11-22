import React from "react";
import * as ReactRedux from "react-redux";
import style from "./Education.module.css"
//institution, titulo, time, where
function Education(data) {
  const theme = ReactRedux.useSelector((state) => state.theme);
  return (
    <div class={theme === "light"?style.educationDiv:style.educationDivD}>
      <span class={theme === "light"?style.institution:style.institutionD}>{data.institution}</span>
      <span class={style.titulo}>{data.titulo}</span>
      <span class={style.time}>{data.time}</span>
      <span class={style.where}>{data.where}</span>
    </div>
  );
}

export default Education;
