/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import { Link } from "react-router-dom";
import * as ReactRedux from "react-redux";
import style from "./NavBar.module.css";
import fotoprueba1 from "../../IMG/memoji2.png";
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
    <div className={theme === "light" ? style.navbar : style.navbarD}>
      <Link to="/">
        <img className={style.img} alt="FOTO" src={fotoprueba1} />
      </Link>
      <label
        htmlFor="menu"
        onClick={() => toggle()}
        className={style.nav__label}
      >
        <div
          className={theme === "light" ? style.btn_hmb : style.btn_hmbD}
          id="btn_hmb"
        >
          <div
            className={theme === "light" ? style.linea1 : style.linea1D}
            id="linea1"
          />
          <div
            className={theme === "light" ? style.linea2 : style.linea2D}
            id="linea2"
          />
          <div
            className={theme === "light" ? style.linea3 : style.linea3D}
            id="linea3"
          />
        </div>
      </label>
      <input
        type="checkbox"
        id="menu"
        checked={openMenu}
        className={style.nav__input}
      />

      <div
        className={theme === "light" ? style.linksSection : style.linksSectionD}
      >
        <a
          href="/home/#about"
          onClick={() => toggle()}
          className={theme === "light" ? style.links : style.linksD}
        >
          {lang === "eng" ? "About" : "Sobre mi"}
        </a>
        <a
          href="/home/#proyects"
          onClick={() => toggle()}
          className={theme === "light" ? style.links : style.linksD}
        >
          {lang === "eng" ? "Proyects" : "Proyectos"}
        </a>
        <a
          href="/home/#skills"
          onClick={() => toggle()}
          className={theme === "light" ? style.links : style.linksD}
        >
          {lang === "eng" ? "Skills" : "Habilidades"}
        </a>
        <a
          href="/home/#contact"
          onClick={() => toggle()}
          className={theme === "light" ? style.links : style.linksD}
        >
          {lang === "eng" ? "Contact" : "Contacto"}
        </a>
      </div>
    </div>
  );
}

export default NavBar;
