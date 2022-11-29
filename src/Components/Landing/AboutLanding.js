import React from 'react';
import * as ReactRedux from 'react-redux';
import { Link } from 'react-router-dom';
import style from './AboutLanding.module.css';

function AboutLanding() {
  const theme = ReactRedux.useSelector((state) => state.theme);
  const lang = ReactRedux.useSelector((state) => state.lang);

  return (
    <div className={theme === 'light' ? style.div : style.divD}>
      <div className={theme === 'light' ? style.diva : style.divaD}>
        <h2 className={theme === 'light' ? style.hello : style.helloD}>
          {lang === 'eng' ? 'Hello!' : 'Hola!'}
        </h2>
        <div className={theme === 'light' ? style.here : style.hereD}>
          <h1 className={theme === 'light' ? style.aqui : style.aquiD}>
            {lang === 'eng' ? 'Here ' : 'Soy '}
          </h1>
          <h1 className={theme === 'light' ? style.name : style.nameD}>
            <span className={style.span1}>F</span>
            <span className={style.span2}>e</span>
            <span className={style.span3}>d</span>
            <span className={style.span4}>e</span>
            <span className={style.span5}>r</span>
            <span className={style.span6}>i</span>
            <span className={style.span7}>c</span>
            <span className={style.span8}>o</span>
            <span className={style.span9}>!</span>
          </h1>
        </div>

        <h3 className={theme === 'light' ? style.h3 : style.h3D}>
          {lang === 'eng'
            ? 'I´m a Full Stack Web Developer'
            : 'Soy desarrollador web Full Stack'}
          <br />
        </h3>
        <h3 className={theme === 'light' ? style.h3 : style.h3D}>
          {lang === 'eng'
            ? 'Do you want to know more about me?'
            : '¿Queres conocer más sobre mi?'}
        </h3>
      </div>
      <Link
        class={theme === 'light' ? style.link : style.linkD}
        to="/home/#about"
      >
        {lang === 'eng' ? "Let's Start the Ride" : 'Empecemos'}
      </Link>
    </div>
  );
}

export default AboutLanding;
