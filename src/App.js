import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import ProjectList from './components/ProjectList';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <NavBar />
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route path="/contactForm" element={<ContactForm />}/>
        <Route path="/projects" element={<ProjectList/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;