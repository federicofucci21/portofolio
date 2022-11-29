import React from "react";
import style from "./Works.module.css";

function Works({ name, dev, description, tecnologies, github, demo, img }) {
  return (
    <div className={style.card}>
      <div className={style.tittle}>
        {name} |{dev}
      </div>
      <div className={style.imgCont}>
        <img className={style.img} alt="FOTO" src={img} />
      </div>
      <div className={style.description}>{description}</div>
      <div className={style.tecnologies}>{tecnologies}</div>
      <div className={style.link}>
        <a className={style.a} href={github} target="_blank" rel="noreferrer">
          Github
        </a>
        <a className={style.a} href={demo} target="_blank" rel="noreferrer">
          Demo
        </a>
      </div>
    </div>
  );
}

export default Works;
