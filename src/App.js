import React, { useState } from "react";
import "./App.css";
import myPhoto from "./assets/Kavita.jpg";
import CV from "./assets/KavitaPhogatsCV.pdf";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { FaUser, FaProjectDiagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiFileText, FiMail } from "react-icons/fi";

function App() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="App">

      {/* Home Section */}
      {!activeSection && (
        <section className="home-section">

          {/* Section Buttons — Moved Above Image */}
          <div className="section-buttons">
              <button onClick={() => setActiveSection("about")}><FaUser /> About</button>
              <button onClick={() => setActiveSection("projects")}><FaProjectDiagram /> Projects</button>
              <button onClick={() => setActiveSection("skills")}><FiFileText /> Skills</button>
              <button>
                <a href={CV} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                  <FiFileText /> Resume
                </a>
              </button>
              <button onClick={() => setActiveSection("contact")}><FiMail /> Contact</button>
          </div>

          {/* Hero Image */}
          <img src={myPhoto} alt="Kavita Phogat" className="hero-image" />

          {/* Greeting */}
          <h1>Hey there!👋 I'm Kavita Phogat</h1>                        

          {/* Datamatics Text */}
          <div className="datamatika">
            <h2>Datamatiker</h2>
            <p>
              Datamatiker with an interest in both front-end and back-end development. I have experience developing web and .NET-based solutions as well as working with databases and APIs. I work in a structured and responsible manner, focus on quality in my work and thrive in collaboration with others. I am motivated to continuously develop my professional and technical skills.
            </p>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/kavita-phogat-635980335/" target="_blank" rel="noreferrer"><FaLinkedin size={30}/></a>
            <a href="https://github.com/kaph55" target="_blank" rel="noreferrer"><FaGithub size={30}/></a>                           
            
          </div>

        </section>
      )}

      {/* Conditional Rendering of Sections */}
      <section className="portfolio-section">
        {activeSection === "about" && <About />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "skills" && <Skills />}
        {activeSection === "contact" && <Contact />}
        
        {/* Optional Back to Home button */}
        {activeSection && (
          <button 
            className="back-home" 
            onClick={() => setActiveSection(null)}
          >
            ← Back to Home
          </button>
        )}
      </section>
      
    </div>
  );
}

export default App;