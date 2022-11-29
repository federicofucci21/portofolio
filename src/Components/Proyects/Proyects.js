/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import * as ReactRedux from "react-redux";
import style from "./Proyects.module.css";
import { dataProyects1 } from "../../Assets/data";
import Works from "./Works";

function Proyects() {
  const theme = ReactRedux.useSelector((state) => state.theme);
  const lang = ReactRedux.useSelector((state) => state.lang);
  const [work, setWork] = useState("CaneApp");

  const workState = dataProyects1[work];

  const toggle = (tittle) => {
    setWork(tittle);
  };

  return (
    <section
      id="proyects"
      className={theme === "light" ? style.div : style.divD}
    >
      <section className={style.section}>
        <div className={theme === "light" ? style.tittle : style.tittleD}>
          {lang === "eng" ? "Proyects" : "Proyectos"}
        </div>
        <div className={theme === "light" ? style.proyects : style.proyectsD}>
          <div className={style.navbar}>
            <div
              className={theme === "light" ? style.btnNavbar : style.btnNavbarD}
              onClick={() => toggle("CaneApp")}
            >
              Cane-App
            </div>
            <div
              className={theme === "light" ? style.btnNavbar : style.btnNavbarD}
              onClick={() => toggle("CountriesApp")}
            >
              Countries-App
            </div>
            <div
              className={theme === "light" ? style.btnNavbar : style.btnNavbarD}
              onClick={() => toggle("BacoFusion")}
            >
              Baco Fusión
            </div>
            <div
              className={theme === "light" ? style.btnNavbar : style.btnNavbarD}
              onClick={() => toggle("any")}
            >
              Comming soon...
            </div>
            <div
              className={theme === "light" ? style.btnNavbar : style.btnNavbarD}
              onClick={() => toggle("any")}
            >
              Comming soon...
            </div>
            <div
              className={theme === "light" ? style.btnNavbar : style.btnNavbarD}
              onClick={() => toggle("any")}
            >
              Comming soon...
            </div>
          </div>
          <div className={theme === "light" ? style.card : style.cardD}>
            <Works
              name={workState.name}
              img={workState.img}
              description={workState.description}
              link={workState.link}
              dev={workState.dev}
              tecnologies={workState.tecnologies}
              github={workState.github}
              demo={workState.demo}
            />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Proyects;
