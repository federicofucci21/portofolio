import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import style from "./App.module.css";
import Switch from "./Components/Switch/Switch";
import LangBtn from "./Components/LangBtn/LangBtn";

function App() {
  return (
    <div class={style.App}>
      <Switch />
      <LangBtn />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
