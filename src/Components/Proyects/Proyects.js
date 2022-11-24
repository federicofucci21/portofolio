import React, { useState } from "react";
import style from "./Proyects.module.css";
// import caneapp from "../../IMG/caneapp.png"
// import countriesapp from "../../IMG/countriesapp.png"
import { dataProyects, dataProyects1 } from "../../Assets/data";
import Works from "./Works";
import LoadingPage from "../LoadingPage/loadingPage";
import * as ReactRedux from "react-redux";

function Proyects() {
  const theme = ReactRedux.useSelector((state) => state.theme);
  const lang = ReactRedux.useSelector((state) => state.lang);
  const [work, setWork] = useState("CaneApp");

  const workState = dataProyects1[work];

  const toggle = (tittle) => {
    setWork(tittle);
  };

  return (

<section id="proyects" class={theme === "light" ?style.div:style.divD}>
    <section class={style.section}>
      <div class={theme === "light" ?style.tittle:style.tittleD}>
        {lang === "eng" ? "Proyects" : "Proyectos"}
      </div>
      <div class={theme === "light" ?style.proyects:style.proyectsD}>
        <div className={style.navbar}>
          <div class={theme === "light" ?style.btnNavbar:style.btnNavbarD} onClick={() => toggle("CaneApp")}>
            Cane-App
          </div>
          <div
            class={theme === "light" ?style.btnNavbar:style.btnNavbarD}
            onClick={() => toggle("CountriesApp")}
          >
            Countries-App
          </div>
          <div
            class={theme === "light" ?style.btnNavbar:style.btnNavbarD}
            onClick={() => toggle("BacoFusion")}
          >
            Baco Fusión
          </div>
          <div class={theme === "light" ?style.btnNavbar:style.btnNavbarD} onClick={() => toggle("any")}>
            Comming soon...
          </div>
          <div class={theme === "light" ?style.btnNavbar:style.btnNavbarD} onClick={() => toggle("any")}>
            Comming soon...
          </div>
          <div class={theme === "light" ?style.btnNavbar:style.btnNavbarD} onClick={() => toggle("any")}>
            Comming soon...
          </div>
        </div>
        <div class={theme === "light" ?style.card:style.cardD}>
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

