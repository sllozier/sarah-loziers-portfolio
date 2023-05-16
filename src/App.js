import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import EmailConfirmation from "./components/EmailConfirmation";
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/contactForm" element={<ContactForm />} />
        <Route path="/emailConfirmation" element={<EmailConfirmation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
