import React from 'react';
import * as ReactRedux from 'react-redux';
import fotoprueba2 from '../../IMG/memoji1.png';
import AboutLanding from './AboutLanding';
import style from './Landing.module.css';

function Landing() {
  const theme = ReactRedux.useSelector((state) => state.theme);

  return (
    <div className={theme === 'light' ? style.landing : style.landingD}>
      <div className={theme === 'light' ? style.left : style.leftD}>
        <AboutLanding />
      </div>
      <div className={theme === 'light' ? style.rigth : style.rigthD}>
        <img className={style.img} alt="FOTO" src={fotoprueba2} />
      </div>
    </div>
  );
}

export default Landing;
