import React from "react";
import style from "./NavBar.module.css";
import fotoprueba1 from "../../IMG/memoji2.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div class={style.navbar}>
      <Link to="/"><img class={style.img} alt="FOTO" src={fotoprueba1} /></Link>
      <section class={style.linksSection}>
        <Link to="/about" class={style.links}>About</Link>
        <Link to="/proyects" class={style.links}>Proyects</Link>
        <Link to="/skills" class={style.links}>Skills</Link>
        <Link to="/contact" class={style.links}>Contact</Link>
      </section>
    </div>
  );
}

export default NavBar;
