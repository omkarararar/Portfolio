import React from "react";
import { Container, Button } from "react-bootstrap";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import Techstack from "./Techstack";
import { AiFillGithub } from "react-icons/ai";

function Projects() {
  return (
    <Container fluid className="project-section" style={{ paddingTop: "0px", paddingLeft: "0px", paddingRight: "0px" }}>
      <Container>
        <div style={{ marginTop: "0px" }}>
          <ScrollStack
            itemDistance={150}
            itemScale={0.05}
            itemStackDistance={40}
            stackPosition="20%"
            baseScale={0.8}
            blurAmount={2}
          >
            <ScrollStackItem>
              <h2>API Gateway</h2>
              <p>
                A high-performance custom API Gateway featuring routing, authentication, and rate-limiting. Integrated with Prometheus to monitor latency, request counts, and circuit breaker health.
              </p>
              <Button
                variant="primary"
                href="https://github.com/omkarararar/API-Gateway"
                target="_blank"
                style={{ marginTop: "10px", display: "flex", alignItems: "center", gap: "8px" }}
              >
                <AiFillGithub /> GitHub
              </Button>
            </ScrollStackItem>

            <ScrollStackItem>
              <h2>Github Performance Regressor</h2>
              <p>
                An automated agent that detects performance regressions in PRs. It analyzes memory and latency differences between branches by fetching, parsing, and evaluating code difference impacts.
              </p>
              <Button
                variant="primary"
                href="https://github.com/omkarararar/Github-Performance-Regressor"
                target="_blank"
                style={{ marginTop: "10px", display: "flex", alignItems: "center", gap: "8px" }}
              >
                <AiFillGithub /> GitHub
              </Button>
            </ScrollStackItem>

            <ScrollStackItem>
              <h2>Codeit</h2>
              <p>
                A real-time peer coding platform built with WebSockets and Socket.IO. Features collaborative editing and an integrated file management system for a seamless development experience.
              </p>
              <Button
                variant="primary"
                href="https://github.com/omkarararar/Codeit"
                target="_blank"
                style={{ marginTop: "10px", display: "flex", alignItems: "center", gap: "8px" }}
              >
                <AiFillGithub /> GitHub
              </Button>
            </ScrollStackItem>
          </ScrollStack>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
