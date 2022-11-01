import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import EmailConfirmation from './components/EmailConfirmation';
import ProjectsTest from './components/ProjectsTest';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <NavBar />
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route path="/contactForm" element={<ContactForm />}/>
        <Route path="/emailConfirmation" element={<EmailConfirmation/>}/>
        <Route path="/projects/:id" element={<ProjectsTest/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;