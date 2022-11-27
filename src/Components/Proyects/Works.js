import React from "react";
import style from "./Works.module.css";

function Works(data) {
  return (
    <div className={style.card}>
      <div className={style.tittle}>
        {data.name} | {data.dev}
      </div>
      <div class={style.imgCont}>
        <img class={style.img} alt="FOTO" src={data.img} />
      </div>
      <div className={style.description}>{data.description}</div>
      <div className={style.tecnologies}>{data.tecnologies}</div>
      <div className={style.link}>
        <a class={style.a} href={data.github} target="_blank" rel="noreferrer">
          Github
        </a>
        <a class={style.a} href={data.demo} target="_blank" rel="noreferrer">
          Demo
        </a>
      </div>
    </div>
  );
}

export default Works;
