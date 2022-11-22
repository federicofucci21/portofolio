import React from "react";
import style from "./About.module.css";
import Education from "../Education/Education";
import { dataEducation, dataParrafo } from "../../Assets/data";
import LoadingPage from "../LoadingPage/loadingPage";
import * as ReactRedux from "react-redux";
import MeHi from "../../IMG/Mehi .png"

function About() {
  const lang = ReactRedux.useSelector((state) => state.lang);
  const theme = ReactRedux.useSelector((state) => state.theme);

  return (
    <div id="about" class={theme === "light" ?style.home:style.homeD}>
      <div class={theme === "light" ?style.div1:style.div1D}></div>
      <div class={theme === "light" ?style.div2:style.div2D}></div>
      <section class={style.section}>
        <div class={theme === "light" ?style.tittle:style.tittleD}>
          {lang === "eng" ? "About Me" : "Sobre mi"}
        </div>
        <div class={theme === "light" ?style.text:style.textD}>
          <span>
          <tittle>
            {lang === "eng" ? "I´m" : "Soy"}{" "}
            <span class={theme === "light"?style.name:style.nameD}>Federico Fucci</span>
            {lang === "eng"
              ? ", Full Stack Web Developer"
              : ", desarrollador web full stack"}
          </tittle>
          <p>{lang === "eng" ? dataParrafo.eng : dataParrafo.esp}</p>
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
