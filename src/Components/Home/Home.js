import React, { useState } from "react";
import * as ReactRedux from "react-redux";
import About from "../About/About";
import Contact from "../Contact/Contact";
import NavBar from "../NavBar/NavBar";
import Proyects from "../Proyects/Proyects";
import Skills from "../Skills/Skills";
import style from "./Home.module.css";

function Home() {
  const theme = ReactRedux.useSelector((state) => state.theme);

  return (
    <div class={style.home} id={theme}>
      <NavBar />
      <section class={style.components}>
        {/* <div>
          <button>eng</button>
          <button>esp</button>
        </div> */}
        <About />
        <Proyects />
        <Skills />
        <Contact />
      </section>
    </div>
  );
}

export default Home;
