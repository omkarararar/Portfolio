import React from "react";
import { Container } from "react-bootstrap";
import MagicBento from "./MagicBento";
import "./Gallery.css";

function Gallery() {
  return (
    <Container fluid className="gallery-section">
      <Container>
        <h1 className="project-heading" style={{ textAlign: "center", width: "100%" }}>
          My <strong className="purple">Gallery </strong>
        </h1>
        <p style={{ color: "white", textAlign: "center", marginBottom: "40px", fontSize: "1.4em" }}>
          Balling since '05
        </p>

        <div style={{ marginTop: "20px" }}>
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={400}
            particleCount={12}
            glowColor="190, 80, 244" // Consistent Purple
            disableAnimations={false}
          />
        </div>
      </Container>
    </Container>
  );
}

export default Gallery;
