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
    <section id="proyects" class={style.div}>
      {/* <NavBar /> */}
      <section class={style.section}>
        <div class={style.tittle}>
          {lang === "eng" ? "Proyects" : "Proyectos"}
        </div>
        <div class={style.proyects}>
        <div className={style.navbar}>
          <div className={style.btnNavbar} onClick={() => toggle("CaneApp")}>
            Cane-App
          </div>
          <div
            className={style.btnNavbar}
            onClick={() => toggle("CountriesApp")}
          >
            Countries-App
          </div>
          <div className={style.btnNavbar} onClick={() => toggle("BacoFusion")}>
            Baco Fusión
          </div>
          <div className={style.btnNavbar} onClick={() => toggle("any")}>
            Comming soon...
          </div>
          <div className={style.btnNavbar} onClick={() => toggle("any")}>
            Comming soon...
          </div>
          <div className={style.btnNavbar} onClick={() => toggle("any")}>
            Comming soon...
          </div>
        </div>
        <div className={theme === "light" ? style.workView : style.workViewD}>
          <Works
            name={workState.name}
            img={workState.img}
            link={workState.link}
          />
        </div>
        </div>
      </section>
    </section>
  );
}

export default Proyects;

// {<div class={style.proyects}>
//           {/* <div class={style.proyectsDiv}> */}
//           {dataProyects.length > 0 ? (
//             dataProyects.map((e) => (
//               <Works name={e.name} img={e.img} link={e.link} />
//             ))
//           ) : (
//             <LoadingPage />
//           )}
//           {/* </div> */}
//         </div>}
