import React from "react";
import style from "./Home.module.css";
import NavBar from "../NavBar/NavBar";
import Education from "../Education/Education"
import { dataEducation } from "../../Assets/data";
import LoadingPage from "../LoadingPage/loadingPage";

function Home() {
  console.log(dataEducation)
  return (
    <div class={style.home}>
      <NavBar />
      <section class={style.section}>
        <div class={style.tittle}>About Me</div>
        <div class={style.text}>
          <tittle>
            I´m <span class={style.name}>Federico Fucci</span>, Full Stack Web
            Developer
          </tittle>
          <p>
            I am currently carrying out a clear objective: insert myself into IT
            world. That's why I took my first steps as a "Full Stack Web
            Developer" with Henry. My life experiences have given me great
            decision-making and leadership skills, as well as the need to test
            myself in changing situations and acquire essential knowledge on my
            own. I found in web development and the IT universe my true passion.
          </p>
        </div>
        <div class={style.educationTittle}>Education</div>
        <div class={style.education}>
          {
            dataEducation.legth<1
            ? (
              dataEducation.map((e)=>(
                <Education
                institution={e.institution}
                titulo={e.titulo}
                time={e.time}
                where={e.where}
                />
              ))
            )
            : <LoadingPage/>
          }
        </div>
      </section>
    </div>
  );
}

export default Home;
