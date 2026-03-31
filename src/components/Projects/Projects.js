import React from "react";
import { Container } from "react-bootstrap";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Projects
        </h1>
        <p style={{ color: "white" }}>
          No projects to display yet.
        </p>
      </Container>
    </Container>
  );
}

export default Projects;
