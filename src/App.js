import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Hero />
        <AboutMe />
      {/* <Routes>
        <Route path="/" element={<Hero/>}/>
      </Routes> */}

    </div>
  );
}

export default App;