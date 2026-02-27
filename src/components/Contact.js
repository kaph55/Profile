import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" style={{ padding: "80px 40px" }}>
      <h2>Contact Me</h2>
      <p>If you want to reach out, feel free to contact me via email or LinkedIn.</p>

      <div className="contact-info">
        <p><strong>Email:</strong> <a href="mailto:Kavita.malik84@gmail.com">Kavita.malik84@gmail.com</a></p>
        <p><strong>Phone:</strong> +45 50105143</p>
        <p>
          <strong>LinkedIn:</strong> 
          <a href="https://www.linkedin.com/in/kavita-phogat-635980335/" target="_blank" rel="noreferrer">
            View Profile
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;