import React from 'react'
import NavBar from '../NavBar/NavBar'
import style from "./Proyects.module.css"
import caneapp from "../../IMG/caneapp.png"
import countriesapp from "../../IMG/countriesapp.png"

function Proyects() {
  return (
    <div class={style.div}>
    <NavBar />
    <section class={style.section}>
      <div class={style.tittle}>Proyects</div>
      <div class={style.proyects}>
        <div class={style.proyectsDiv}>
          <span class={style.institution}>Cane App</span>
          <span class={style.titulo}>----</span>
          <span class={style.time}>----</span>
          <img class={style.img} alt="FOTO" src={caneapp}/>
        </div>
        <div class={style.proyectsDiv}>
          <span class={style.institution}>Countries App</span>
          <span class={style.titulo}>----</span>
          <span class={style.time}>----</span>
          <img class={style.img} alt="FOTO" src={countriesapp}/>
        </div>
        <div class={style.proyectsDiv}>
          <span class={style.institution}>----</span>
          <span class={style.titulo}>----</span>
          <span class={style.time}>----</span>
          <span class={style.where}>----</span>
        </div>
      </div>
    </section>
  </div>
);
}

export default Proyects