import React from "react";
import style from "./Home.module.css";
import NavBar from "../NavBar/NavBar";

function Home() {
  return (
    <div class={style.home}>
      <NavBar />
      <section class={style.section}>
        <div class={style.tittle}>About Me</div>
        <div class={style.text}>
          <tittle>
            I´m <span class={style.name}>Federico Fucci</span>, Full Stack Web
            Developer
          </tittle>
          <p>
            I am currently carrying out a clear objective: insert myself into IT
            world. That's why I took my first steps as a "Full Stack Web
            Developer" with Henry. My life experiences have given me great
            decision-making and leadership skills, as well as the need to test
            myself in changing situations and acquire essential knowledge on my
            own. I found in web development and the IT universe my true passion.
          </p>
        </div>
        <div class={style.educationTittle}>Education</div>
        <div class={style.education}>
          <div class={style.educationDiv}>
            <span class={style.institution}>Henry</span>
            <span class={style.titulo}>Full Stack Web Developer</span>
            <span class={style.time}>March 2022 / October 2022</span>
            <span class={style.where}>Rosario, Santa Fe</span>
          </div>
          <div class={style.educationDiv}>
            <span class={style.institution}>ISTM</span>
            <span class={style.titulo}>Radiologist</span>
            <span class={style.time}>March 2011 / December 2016</span>
            <span class={style.where}>Rosario, Santa Fe</span>
          </div>
          <div class={style.educationDiv}>
            <span class={style.institution}>EET 6</span>
            <span class={style.titulo}>Electromechanical technician</span>
            <span class={style.time}>March 2001 / December 2006</span>
            <span class={style.where}>San Nicolas, Buenos Aires</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
