import React from "react";
import "./Projects.css";

function Projects() {
  const myProjects = [
    {
      title: "Student Management System",
      description: "A system to manage student records, grades, and attendance.",
      technologies: "C#, SQL Server, MVC",
      link: "#"
    },
    {
      title: "React Web Application",
      description: "Responsive web app using React and REST API.",
      technologies: "React, CSS, REST API",
      link: "#"
    }
  ];

  return (
    <section id="projects" style={{ padding: "80px 40px" }}>
      <h2>Projects</h2>
      <div className="projects-container">
        {myProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies}</p>
            {project.link !== "#" && (
              <a href={project.link} target="_blank" rel="noreferrer">View Project</a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;