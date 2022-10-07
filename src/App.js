// import logo from './logo.svg';
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
// import NavBar from "./Components/NavBar/NavBar";
import Landing from "./Components/Landing/Landing";
import style from "./App.module.css";
import Proyect from "./Components/Proyects/Proyects"
import Skills from "./Components/Skills/Skills"
import Contact from "./Components/Contact/Contact"

function App() {
  return (
    <div class={style.App}>
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        {/* <Route path="/" element={<NavBar/>}></Route> */}
        <Route path="/about" element={<Home />}></Route>
        <Route path="/proyects" element={<Proyect />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
