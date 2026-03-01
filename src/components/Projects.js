import React from "react";
import "./Projects.css";
import varebutikImg from "../assets/VareButik.png";
import MachineLearningImg from "../assets/MLObject.png";
import ProudChickenImg from "../assets/ProudChicken.png";
import EnergiConsumptionImg from "../assets/EnergiConsumption.png";



function Projects() {
  const myProjects = [
  {
    title: "VareButik",
    description: "An online store where users can browse and buy products. Built using Web API + MVC and connected to a MySQL database.",
    technologies: ["ASP.NET MVC", "Web API", "MySQL"],
    link: "https://github.com/kaph55/VareButik",
    image: varebutikImg
  },
  {
  title: "Machine Learning Object Detection",
  description: "Real-time object detection in C# using ML.NET and a Roboflow dataset.",
  technologies: ["C#", "ML.NET", "WPF", "Console App"],
  link: "https://github.com/kaph55/MLObjectDetection",
  image: MachineLearningImg
  },
  {
  title: "ProudChicken Notification Management System",
  description: "C#-based SMS and Email management system for ProudChicken to send customer notifications. Built with Console and WPF apps using MVC architecture.",
  technologies: ["C#", "WPF", "MVC", "Console App"],
  link: "https://github.com/kaph55/ProudChicken",
  image: ProudChickenImg
  },
  {
  title: "EnergiConsumption",
  description: "Multi-project .NET solution for tracking and visualizing energy consumption, including Console, WPF, and RESTful Web API applications.",
  technologies: ["C#", "ASP.NET MVC", "Console App", "MySQL", "REST API"],
  link: "https://github.com/kaph55/EnergiConsumption",
  image: EnergiConsumptionImg
}
];

  return (
    <section id="projects" style={{ padding: "80px 40px" }}>
      <h2>Projects</h2>
      <div className="projects-container">
  {myProjects.map((project, index) => (
    <div className="project-card" key={index}>

        <div className="project-text">
          <h3>{project.title}</h3>
          <p>{project.description}</p>

          <p><strong>Technologies:</strong></p>
          <ul>
            {project.technologies.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>

          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          )}
        </div>

        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
        )}

       </div>
        ))}
      </div>
     
    </section>
  );
}

export default Projects;