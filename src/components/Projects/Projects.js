import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Projects
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Bus Booking System"
              description=" Developed a user-friendly web application for booking bus tickets using HTML and CSS for the ease of transportation."
              ghLink="https://github.com/pratikrajput-123"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Resume Builder(MERN)"
              description="Developed a Resume Builder web application using MongoDB, Express.js, React, and Node.js, implementing dynamic UIs, secure APIs, and efficient data management."
              ghLink="https://github.com/pratikrajput-123/resume7thsem"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Food Waste Management System"
              description="Designed and developed a website using React to manage food waste distribution to needy individuals, aiming to alleviate poverty."
              ghLink="https://github.com/pratikrajput-123"            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
