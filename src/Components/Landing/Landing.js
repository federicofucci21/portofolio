import React from "react";
import fotoprueba2 from "../../IMG/memoji1.png";
import AboutLanding from "./AboutLanding";
import * as ReactRedux from "react-redux";
import style from "./Landing.module.css";

function Landing() {
  const theme = ReactRedux.useSelector((state) => state.theme);

  return (
    <div class={theme==="light"?style.landing:style.landingD}>
      <div class={theme==="light"?style.left:style.leftD}>
        <AboutLanding />
      </div>
      <div class={theme==="light"?style.rigth:style.rigthD}>
        <img class={style.img} alt="FOTO" src={fotoprueba2} />
      </div>
    </div>
  );
}

export default Landing;
