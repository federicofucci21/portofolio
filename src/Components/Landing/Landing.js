import React from "react";
import fotoprueba1 from "../../IMG/fotoprueba1.jpeg";
import AboutLanding from "./AboutLanding";

import style from "./Landing.module.css";

function Landing() {
  return (
    <div class={style.landing}>
      <div class={style.left}>
        <AboutLanding />
      </div>
      <div class={style.rigth}>
        <img class={style.img}  alt="FOTO" src={fotoprueba1} />
      </div>
    </div>
  );
}

export default Landing;
