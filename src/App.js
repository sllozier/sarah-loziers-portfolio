import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Technologies from './components/Technologies';
import ProjectGrid from './components/ProjectGrid';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Hero />
        <AboutMe />
        <Technologies />
        <ProjectGrid />
        <CallToAction />
        <Footer />
      {/* <Routes>
        <Route path="/" element={<Hero/>}/>
      </Routes> */}

    </div>
  );
}

export default App;