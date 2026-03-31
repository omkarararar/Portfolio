import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi — I'm <span className="purple">Omkar Panchawadkar</span>.
            <br />
            About content will be updated here. Share the text you'd like
            displayed and I'll paste it in.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem Solving
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "This section will be customized with your content." 
          </p>
          <footer className="blockquote-footer">Omkar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
