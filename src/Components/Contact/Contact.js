import React from 'react'
import style from "./Contact.module.css"
import * as ReactRedux from "react-redux";

function Contact() {

  const theme = ReactRedux.useSelector((state) => state.theme);
  const lang = ReactRedux.useSelector((state) => state.lang);

  return (
    <div id="contact" class={style.div}>
      {/* <NavBar /> */}
      <section class={style.section}>
      <div class={style.tittle}>{lang === "eng" ? "Contact" : "Contacto"}</div>
      <div class={style.proyects}>
        
      </div>
    </section>
    </div>
  )
}

export default Contact