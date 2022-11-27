import React from "react";
import style from "./About.module.css";
import Education from "../Education/Education";
import { dataEducation, dataParrafo } from "../../Assets/data";
import * as ReactRedux from "react-redux";
import MeHi from "../../IMG/Mehi .png"
import CV from "../../Assets/CV - Federico Eloy Fucci - 2022 (2).pdf"

function About() {
  const lang = ReactRedux.useSelector((state) => state.lang);
  const theme = ReactRedux.useSelector((state) => state.theme);

  return (
    <div id="about" class={theme === "light" ?style.home:style.homeD}>
      <section class={style.section}>
        <div class={theme === "light" ?style.tittle:style.tittleD}>
          {lang === "eng" ? "About Me" : "Sobre mi"}
        </div>
        <div class={theme === "light" ?style.text:style.textD}>
          <span>
          <span class={theme === "light" ?style.mySpan:style.mySpanD}>
            {lang === "eng" ? "I´m" : "Soy"}{" "}
            <span class={theme === "light"?style.name:style.nameD}>Federico Fucci</span>
            {lang === "eng"
              ? "Full Stack Web Developer"
              : "Desarrollador Web Full Stack"}
              <a href={CV} download="CV-Federico Eloy Fucci">{lang === "eng" ? "Download CV" : "Descargar CV"}</a>
          </span>
          <p class={theme === "light"?style.p:style.pD}>{lang === "eng" ? dataParrafo.eng : dataParrafo.esp}</p>
          </span>
          <img class={style.imgMeHi} alt="FOTO" src={MeHi} />
        </div>
        <div class={theme === "light"?style.educationTittle:style.educationTittleD}>
          {lang === "eng" ? "Education" : "Educación"}
        </div>
        <div class={style.education}>
          {lang === "eng"
            ? dataEducation.eng.map((e) => (
                <Education
                  institution={e.institution}
                  titulo={e.titulo}
                  time={e.time}
                  where={e.where}
                />
              ))
            : dataEducation.esp.map((e) => (
                <Education
                  institution={e.institution}
                  titulo={e.titulo}
                  time={e.time}
                  where={e.where}
                />
              ))}
        </div>
      </section>
    </div>
  );
}

export default About;