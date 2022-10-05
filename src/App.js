// import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home/Home"
import { Routes, Route} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar"
import Landing from './Components/Landing/Landing';

function App() {
  return (
    <div className="App">
      <NavBar path="/"element={NavBar} />
      <Landing path="/" element={Landing} />
      {/* <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes> */}

    </div>
  );
}

export default App;
