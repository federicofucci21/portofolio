// import logo from './logo.svg';
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Landing from "./Components/Landing/Landing";
import style from "./App.module.css";
import Proyect from "./Components/Proyects/Proyects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
    <Landing/>
    <div class={style.App}>
      <NavBar/>
      <div>
        <Home/>
        <Proyect/>
        <Skills/>
        <Contact/>
      </div>
    </div>
    </>
  );
}

export default App;
