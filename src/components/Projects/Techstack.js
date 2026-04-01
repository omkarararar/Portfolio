import React from "react";
import { Col, Row } from "react-bootstrap";

// Local TechIcons
import cplusplusIcon from "../../Assets/TechIcons/C++.svg";
import dockerIcon from "../../Assets/TechIcons/Docker.svg";
import gitIcon from "../../Assets/TechIcons/Git.svg";
import javascriptIcon from "../../Assets/TechIcons/Javascript.svg";
import mongoIcon from "../../Assets/TechIcons/Mongo.svg";
import nodeIcon from "../../Assets/TechIcons/Node.svg";
import nextIcon from "../../Assets/TechIcons/Next.svg";
import postmanIcon from "../../Assets/TechIcons/Postman.svg";
import pythonIcon from "../../Assets/TechIcons/Python.svg";
import reactIcon from "../../Assets/TechIcons/React.svg";
import redisIcon from "../../Assets/TechIcons/Redis.svg";
import sqlIcon from "../../Assets/TechIcons/SQL.svg";

import "./Skills.css";

function Techstack() {
  const skills = [
    { icon: <img src={cplusplusIcon} alt="C++" className="tech-icon-svg" /> },
    { icon: <img src={dockerIcon} alt="Docker" className="tech-icon-svg" /> },
    { icon: <img src={gitIcon} alt="Git" className="tech-icon-svg" /> },
    { icon: <img src={javascriptIcon} alt="JavaScript" className="tech-icon-svg" /> },
    { icon: <img src={mongoIcon} alt="MongoDB" className="tech-icon-svg" /> },
    { icon: <img src={nodeIcon} alt="Node.js" className="tech-icon-svg" /> },
    { icon: <img src={nextIcon} alt="Next.js" className="tech-icon-svg" /> },
    { icon: <img src={postmanIcon} alt="Postman" className="tech-icon-svg" /> },
    { icon: <img src={pythonIcon} alt="Python" className="tech-icon-svg" /> },
    { icon: <img src={reactIcon} alt="React" className="tech-icon-svg" /> },
    { icon: <img src={redisIcon} alt="Redis" className="tech-icon-svg" /> },
    { icon: <img src={sqlIcon} alt="SQL" className="tech-icon-svg" /> },
  ];

  return (
    <div className="techstack-section">
      <h1 className="project-heading" style={{ paddingBottom: "50px" }}>
        <strong className="purple">Skills </strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {skills.map((skill, index) => (
          <Col key={index} xs={4} md={2} className="tech-icons">
            <div className="tech-icon-container">
              {skill.icon}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Techstack;
