import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    "C#",
    "Java",
    "Python",
    "JavaScript",
    "React",
    "Blazor",
    ".NET MAUI",
    "MVC",
    "WPF",
    "REST API",
    "HTML",
    "CSS",
    "SQL Server",
    "SQLite",
    "Agile (Scrum & Kanban)"
  ];

  return (
    <section id="skills" style={{ padding: "80px 40px" }}>
      <h2>Technical Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;