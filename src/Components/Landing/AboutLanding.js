import React from "react";
import style from "./AboutLanding.module.css";
import * as ReactRedux from "react-redux";
import { Link } from "react-router-dom";

function AboutLanding() {

  const theme = ReactRedux.useSelector((state) => state.theme);
  const lang = ReactRedux.useSelector((state) => state.lang);



  return (
    <div>
      <div class={theme==="light"?style.div:style.divD}>
        <h2 class={theme==="light"?style.hello:style.helloD}>{lang==="eng"?("Hello!"):("Hola!")}</h2>
        <h1 class={theme==="light"?style.name:style.nameD}>{lang==="eng"?("Here Federico!"):("Aqui Federico!")}</h1>
        <h3 class={theme==="light"?style.h3:style.h3D}>{lang==="eng"?("I´m a Full Stack Web Developer"):("Soy desarrollador web Full Stack")}</h3>
        <h3 class={theme==="light"?style.h3:style.h3D}>{lang==="eng"?("Do you want to know more about me?"):("¿Queres conocer más sobre mi?")}</h3>
        <Link class={theme==="light"?style.link:style.linkD} to="/home/#about">
        {lang==="eng"?("Let's Start the Ride"):("Empecemos")}
        </Link>
      </div>
    </div>
  );
}

export default AboutLanding;
