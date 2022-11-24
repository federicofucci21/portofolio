import React from 'react'
import style from "./Contact.module.css"
import * as ReactRedux from "react-redux";
import { contact } from '../../Assets/data';

function Contact() {
console.log(contact)
  const theme = ReactRedux.useSelector((state) => state.theme);
  const lang = ReactRedux.useSelector((state) => state.lang);

  return (
    <div id="contact" class={theme === "light" ?style.div:style.divD}>
      <section class={style.section}>
      <div class={theme === "light" ?style.tittle:style.tittleD}>{lang === "eng" ? "Contact" : "Contacto"}</div>
      <div class={style.contacts}>
        
          {
            contact.map(e=>{
              return(
              <div class={theme === "light" ?style.contactsDiv:style.contactsDivD}>
              <a href={e.url} target="_blank" rel="noreferrer">
                <img src={e.img}/>
                <p>{e.name}</p>
              </a>
              </div>)
            })
          }
        
      </div>
    </section>
    </div>
  )
}

export default Contact