import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home/Home"
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar"

function App() {
  return (
    <div className="App">
      <NavBar path="/"element={NavBar} />
      <Routes>
        <Route path="/" element={<Home/>}/>

      </Routes>

    </div>
  );
}

export default App;
