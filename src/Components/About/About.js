import React from "react";
import style from "./About.module.css";
import NavBar from "../NavBar/NavBar";
import Education from "../Education/Education";
import { dataEducation, dataParrafo } from "../../Assets/data";
import LoadingPage from "../LoadingPage/loadingPage";
import * as ReactRedux from "react-redux";

function About() {
  const lang = ReactRedux.useSelector((state) => state.lang);

  // {lang==="eng"?("About Me"):("Sobre mi")}

  return (
    <div id="about" class={style.home}>
      {/* <NavBar /> */}
      <section class={style.section}>
        <div class={style.tittle}>
          {lang === "eng" ? "About Me" : "Sobre mi"}
        </div>
        <div class={style.text}>
          <tittle>
            {lang === "eng" ? "I´m" : "Soy"}{" "}
            <span class={style.name}>Federico Fucci</span>
            {lang === "eng"
              ? ", Full Stack Web Developer"
              : ", desarrollador web full stack"}
          </tittle>
          <p>
          {lang === "eng"
              ? dataParrafo.eng
              : dataParrafo.esp}
          </p>
        </div>
        <div class={style.educationTittle}>{lang === "eng" ? "Education" : "Educación"}</div>
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
      {/* <section>
        <Proyects id="proyects"/>
      </section> */}
    </div>
  );
}

export default About;

dataEducation.length > 0 ? (
  dataEducation.map((e) => (
    <Education
      institution={e.institution}
      titulo={e.titulo}
      time={e.time}
      where={e.where}
    />
  ))
) : (
  <LoadingPage />
);
