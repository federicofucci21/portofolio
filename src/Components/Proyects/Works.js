import React from "react";
import style from "./Works.module.css";
// import { Link } from 'react-router-dom'

function Works(data) {
  return (
    <a class={style.a} href={data.link} target="_blank" rel="noreferrer">
      <div class={style.proyectsDiv}>
        <span class={style.name}>{data.name}</span>
        <img class={style.img} alt="FOTO" src={data.img} />
      </div>
    </a>
  );
}

export default Works;
