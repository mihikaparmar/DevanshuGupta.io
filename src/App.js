import React, {useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import AboutMe from "./components/aboutme/AboutMe";
import ProjectSection from "./components/project-section/ProjectSection";
import ContactMe from "./components/contactme/ContactMe";
import Footer from "./components/footer/Footer";
// importing pages



const App = () => {

  
  return (
    <>
      
        <div className="app-container">
          <Navbar></Navbar>
          <Hero/>
          <AboutMe/>
          <ProjectSection/>
          <ContactMe/>
          <Footer/>
          </div>
          
    </>
  );
};

export default App;
