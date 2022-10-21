import React from 'react'
import NavBar from '../NavBar/NavBar'
import style from "./Proyects.module.css"
// import caneapp from "../../IMG/caneapp.png"
// import countriesapp from "../../IMG/countriesapp.png"
import { dataProyects } from "../../Assets/data";
import Works from "./Works"
import LoadingPage from '../LoadingPage/loadingPage'



function Proyects() {
  // console.log(dataProyects)
  return (
    <section id="proyects" class={style.div}>
    {/* <NavBar /> */}
    <section class={style.section}>
      <div class={style.tittle}>Proyects</div>
      <div class={style.proyects}>
        {/* <div class={style.proyectsDiv}> */}
        {dataProyects.length > 0 ? (
            dataProyects.map((e) => (
              <Works
                name={e.name}
                img={e.img}
                link={e.link}
              />
            ))
          ) : (
            <LoadingPage />
          )}
      {/* </div> */}
      </div>
    </section>
  </section>
);
}


export default Proyects