import React from 'react';
import * as ReactRedux from 'react-redux';
import About from '../About/About';
import Contact from '../Contact/Contact';
import NavBar from '../NavBar/NavBar';
import Proyects from '../Proyects/Proyects';
import Skills from '../Skills/Skills';
import style from './Home.module.css';

function Home() {
  const theme = ReactRedux.useSelector((state) => state.theme);

  return (
    <div className={style.home} id={theme}>
      <NavBar />
      <section className={style.components}>
        <About />
        <Proyects />
        <Skills />
        <Contact />
      </section>
    </div>
  );
}

export default Home;
