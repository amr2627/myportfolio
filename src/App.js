
import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import SkillsCarousel from "./components/SkillsCarousel";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <SkillsCarousel />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
