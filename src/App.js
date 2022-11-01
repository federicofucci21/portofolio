// import logo from './logo.svg';
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import style from "./App.module.css";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import * as ReactRedux from "react-redux";
import { changeTheme } from "./Redux/Actions/Actions";
import Switch from "./Components/Switch/Switch";
import LangBtn from "./Components/LangBtn/LangBtn";

function App() {
  const theme = ReactRedux.useSelector((state) => state.theme);
  const dispatch = ReactRedux.useDispatch();

  const toggleTheme = () => {
    dispatch(changeTheme(theme === "light" ? "dark" : "light"));
  };
  return (
    <div class={style.App}>
      <Switch />
      <LangBtn/>
      {/* <ReactSwitch onChange={toggleTheme} checked={theme === "ligth"} /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
