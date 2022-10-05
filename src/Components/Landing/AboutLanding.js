import React from 'react'
import style from "./AboutLanding.module.css"

function AboutLanding() {
  return (
    <div>
        <section>
            <h2 class={style.hello}>Hello!</h2>
            <h1>Here Federico!</h1>
            <h3>I´m a Full Stack Web Debeloper</h3>
            <h3>Do you want to know more about me?</h3>
        </section>
        <button>Let's Start the Ride</button>
    </div>
  )
}

export default AboutLanding