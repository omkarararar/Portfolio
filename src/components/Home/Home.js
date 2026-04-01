import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Folder from "./Folder";
import "./Folder.css";
import linkedinIcon from "../../Assets/linkedin.png";
import githubIcon from "../../Assets/github.png";
import instagramIcon from "../../Assets/instagram.png";
import Home2 from "./Home2";
import Type from "./Type";
// About subcomponents will be used once About content is provided

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                नमस्कार
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> OMKAR PANCHAWADKAR</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div style={{ 
                height: "600px", 
                position: "relative", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center" 
              }}>
                <Folder
                  size={2.7}
                  color="#0077b6"
                  className="custom-folder"
                  items={[
                    <a href="https://www.linkedin.com/in/omkar-panchawadkar/" target="_blank" rel="noreferrer">
                      <img src={linkedinIcon} alt="LinkedIn" style={{ width: "40px" }} />
                    </a>,
                    <a href="https://github.com/omkarararar" target="_blank" rel="noreferrer">
                      <img src={githubIcon} alt="GitHub" style={{ width: "40px" }} />
                    </a>,
                    <a href="https://www.instagram.com/omkaarr08?igsh=NXA4Ym1nZDFxbHFq" target="_blank" rel="noreferrer">
                      <img src={instagramIcon} alt="Instagram" style={{ width: "40px" }} />
                    </a>
                  ]}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      {/* Social links removed per user request */}
    </section>
  );
}

export default Home;

