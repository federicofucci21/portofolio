import React from 'react';
import * as ReactRedux from 'react-redux';
import style from './Skills.module.css';
import { technologies } from '../../Assets/data';

function Skills() {
  const theme = ReactRedux.useSelector((state) => state.theme);
  const lang = ReactRedux.useSelector((state) => state.lang);

  return (
    <div id="skills" className={theme === 'light' ? style.div : style.divD}>
      <section className={style.section}>
        <div className={theme === 'light' ? style.tittle : style.tittleD}>
          {lang === 'eng' ? 'TechStack' : 'TechStack'}
        </div>
        <div className={style.cards}>
          {technologies.map((e) => (
            <div className={style.divCard}>
              <img className={style.imgCard} src={e.url} alt={e.name} />
              <p className={theme === 'light' ? style.pCard : style.pCardD}>{e.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skills;
