// import logo from './logo.svg';
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Landing from "./Components/Landing/Landing";
import style from "./App.module.css"

function App() {
  return (
    <div class={style.App}>
    <NavBar path="/" element={NavBar}></NavBar>
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
