import React from "react";
import style from "./NavBar.module.css";
import fotoprueba1 from "../../IMG/memoji2.png";
import { Link, useNavigate } from "react-router-dom";
import * as ReactRedux from "react-redux";
import { changeOpenMenu } from "../../Redux/Actions/Actions";

function NavBar() {
  const theme = ReactRedux.useSelector((state) => state.theme);
  const lang = ReactRedux.useSelector((state) => state.lang);
  const openMenu = ReactRedux.useSelector((state) => state.openMenu);
  const dispatch = ReactRedux.useDispatch();
  const navigate = useNavigate();

  const toggle = () => {
    dispatch(changeOpenMenu());
  };

  const goTo = (path) => {
    toggle();
    // document.getElementById(`${path}`).scrollIntoView();
    // navigate(`${path}`);
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
        <div className={style.btn_hmb} id="btn_hmb">
          <div className={style.linea1} id="linea1"></div>
          <div className={style.linea2} id="linea2"></div>
          <div className={style.linea3} id="linea3"></div>
        </div>
      </label>
      <input
        type="checkbox"
        id="menu"
        checked={openMenu}
        className={style.nav__input}
      />
      <div class={style.linksSection}>
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
