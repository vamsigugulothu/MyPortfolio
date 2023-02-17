import logo from './logo.svg';
import './App.css';
import "./styles.css";

import { Route, BrowserRouter, Routes } from 'react-router-dom';



import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/Experience" element={<Experience/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
