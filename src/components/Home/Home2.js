import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description" style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> About </span>
            </h1>
            <p className="home-about-body" style={{ textAlign: "justify", fontSize: "1.2rem", lineHeight: "1.8" }}>
              Hey, I'm <b className="purple">Omkar Panchawadkar</b>, a driven engineering undergrad (Class of '27) with a strong interest in <b className="purple">Software Engineering</b>. I have hands-on experience in software development, focusing on building clean, practical, and scalable applications through personal projects and internships.
              <br />
              <br />
              I enjoy working across the stack, from crafting <b className="purple">intuitive frontend experiences</b> to designing <b className="purple">efficient backend systems and APIs</b>. My approach emphasizes writing maintainable code, understanding system design fundamentals, and building solutions that are not just functional but production-ready. 
              <br />
              <br />
              I’m particularly interested in solving real-world problems through technology and continuously refining my skills through hands-on experimentation.
              <br />
              <br />
              Beyond academics, I'm an <b className="purple">avid footballer</b> and an active participant in college events as well as volunteer initiatives. These experiences have helped me develop strong teamwork, leadership, and communication skills, which I bring into my technical work as well.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
