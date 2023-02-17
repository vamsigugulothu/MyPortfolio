
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import "./styles.css";

import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Footer from './components/Footer';
import Loader from "./components/Loader";

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Loader load={load}/>
      <div className="App" style={ load ? { overflow:"hidden", height: "100vh"}: {}}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/Experience" element={<Experience/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
