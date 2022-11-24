import React from "react";
import style from "./Skills.module.css";
import * as ReactRedux from "react-redux";
import { technologies } from "../../Assets/data";

function Skills() {
  const theme = ReactRedux.useSelector((state) => state.theme);
  const lang = ReactRedux.useSelector((state) => state.lang);

  return (
    <div id="skills" class={theme === "light" ?style.div:style.divD}>
      <section class={style.section}>
        <div class={theme === "light" ?style.tittle:style.tittleD}>
          {lang === "eng" ? "TechStack" : "TechStack"}
        </div>
        <div class={style.cards}>
          {technologies.map((e) => {
            return (
              <div className={style.divCard}>
                <img className={style.imgCard} src={e.url} alt={e.name} />
                <p class={theme === "light" ?style.pCard:style.pCardD}>{e.name}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Skills;
