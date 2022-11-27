import React from "react";
import style from "./NavBar.module.css";
import fotoprueba1 from "../../IMG/memoji2.png";
import { Link } from "react-router-dom";
import * as ReactRedux from "react-redux";
import { changeOpenMenu } from "../../Redux/Actions/Actions";

function NavBar() {
  const theme = ReactRedux.useSelector((state) => state.theme);
  const lang = ReactRedux.useSelector((state) => state.lang);
  const openMenu = ReactRedux.useSelector((state) => state.openMenu);
  const dispatch = ReactRedux.useDispatch();

  const toggle = () => {
    dispatch(changeOpenMenu());
  };

  return (
    <div class={theme === "light" ? style.navbar : style.navbarD}>
      <Link to="/">
        <img class={style.img} alt="FOTO" src={fotoprueba1} />
      </Link>
      <label
        htmlFor="menu"
        onClick={() => toggle()}
        className={style.nav__label}
      >
        <div
          class={theme === "light" ? style.btn_hmb : style.btn_hmbD}
          id="btn_hmb"
        >
          <div
            class={theme === "light" ? style.linea1 : style.linea1D}
            id="linea1"
          ></div>
          <div
            class={theme === "light" ? style.linea2 : style.linea2D}
            id="linea2"
          ></div>
          <div
            class={theme === "light" ? style.linea3 : style.linea3D}
            id="linea3"
          ></div>
        </div>
      </label>
      <input
        type="checkbox"
        id="menu"
        checked={openMenu}
        className={style.nav__input}
      />

      <div class={theme === "light" ? style.linksSection : style.linksSectionD}>
        <a
          href="/home/#about"
          onClick={() => toggle()}
          class={theme === "light" ? style.links : style.linksD}
        >
          {lang === "eng" ? "About" : "Sobre mi"}
        </a>
        <a
          href="/home/#proyects"
          onClick={() => toggle()}
          class={theme === "light" ? style.links : style.linksD}
        >
          {lang === "eng" ? "Proyects" : "Proyectos"}
        </a>
        <a
          href="/home/#skills"
          onClick={() => toggle()}
          class={theme === "light" ? style.links : style.linksD}
        >
          {lang === "eng" ? "Skills" : "Habilidades"}
        </a>
        <a
          href="/home/#contact"
          onClick={() => toggle()}
          class={theme === "light" ? style.links : style.linksD}
        >
          {lang === "eng" ? "Contact" : "Contacto"}
        </a>
      </div>
    </div>
  );
}

export default NavBar;
