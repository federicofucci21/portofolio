import React from "react";
import style from "./NavBar.module.css";
import fotoprueba1 from "../../IMG/fotoprueba1.jpeg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div class={style.navbar}>
      <img class={style.img} alt="FOTO" src={fotoprueba1} />
      <section class={style.linksSection}>
        <Link class={style.links}>About</Link>
        <Link class={style.links}>Proyects</Link>
        <Link class={style.links}>Skills</Link>
        <Link class={style.links}>Contact</Link>
      </section>
    </div>
  );
}

export default NavBar;
