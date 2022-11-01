import React from "react";
import style from "./AboutLanding.module.css";
import * as ReactRedux from "react-redux";
import { Link } from "react-router-dom";

function AboutLanding() {

  const theme = ReactRedux.useSelector((state) => state.theme);

  return (
    <div>
      <div class={style.div}>
        <h2 class={theme==="light"?style.hello:style.helloD}>Hello!</h2>
        <h1 class={theme==="light"?style.name:style.nameD}>Here Federico!</h1>
        <h3 class={theme==="light"?style.h3:style.h3D}>I´m a Full Stack Web Developer</h3>
        <h3 class={theme==="light"?style.h3:style.h3D}>Do you want to know more about me?</h3>
        <Link class={theme==="light"?style.link:style.linkD} to="/home/#about">
          Let's Start the Ride
        </Link>
      </div>
    </div>
  );
}

export default AboutLanding;
