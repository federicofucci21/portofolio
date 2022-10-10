import React from "react";
import style from "./Education.module.css"
//institution, titulo, time, where
function Education(data) {
  return (
    <div class={style.educationDiv}>
      <span class={style.institution}>{data.institution}</span>
      <span class={style.titulo}>{data.titulo}</span>
      <span class={style.time}>{data.time}</span>
      <span class={style.where}>{data.where}</span>
    </div>
  );
}

export default Education;
