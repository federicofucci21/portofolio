import React from "react";
import style from "./NavBar.module.css";
import fotoprueba1 from "../../IMG/memoji2.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div class={style.navbar}>
      <Link to="/"><img class={style.img} alt="FOTO" src={fotoprueba1} /></Link>
      <section class={style.linksSection}>
        <a href="/#about" class={style.links}>About</a>
        <a href="/#proyects" class={style.links}>Proyects</a>
        <a href="/#skills" class={style.links}>Skills</a>
        <a href="/#contact" class={style.links}>Contact</a>
      </section>
    </div>
  );
}

export default NavBar;
