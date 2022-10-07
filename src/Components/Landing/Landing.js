import React from "react";
import fotoprueba2 from "../../IMG/memoji1.png";
import AboutLanding from "./AboutLanding";

import style from "./Landing.module.css";

function Landing() {
  return (
    <div class={style.landing}>
      <div class={style.left}>
        <AboutLanding />
      </div>
      <div class={style.rigth}>
        <img class={style.img}  alt="FOTO" src={fotoprueba2} />
      </div>
    </div>
  );
}

export default Landing;
