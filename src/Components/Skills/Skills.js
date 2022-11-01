import React from 'react'
import style from "./Skills.module.css"
import * as ReactRedux from "react-redux";

function Skills() {

  const theme = ReactRedux.useSelector((state) => state.theme);
  const lang = ReactRedux.useSelector((state) => state.lang);

  return (
    <div id="skills" class={style.div}>
    {/* <NavBar /> */}
    <section class={style.section}>
      <div class={style.tittle}>{lang === "eng" ? "Skills" : "Habilidades"}</div>
      <div class={style.proyects}>
        
      </div>
    </section>
  </div>
  )
}

export default Skills