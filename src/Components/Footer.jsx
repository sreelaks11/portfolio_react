import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#050b17",
        color: "#ffffff",
        borderTop: "1px solid #1e3a5f",
      }}
    >
      <Container>
        {/* Main Footer */}
        <Row className="py-5 g-4">

          {/* About */}
          <Col lg={5} md={6} sm={12}>
            <h3 className="fw-bold mb-3">
              Sreelakshmi
            </h3>

            <p
              style={{
                color: "#a8b3c7",
                lineHeight: "1.8",
                maxWidth: "450px",
              }}
            >
              MEARN Stack Developer passionate about creating modern,
              responsive and user-friendly web applications.
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-3 mt-4">
              <a
                href="https://github.com/sreelaks11"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "10px",
                  backgroundColor: "#0b1426",
                  border: "1px solid #1e3a5f",
                  color: "#38bdf8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/in/sreelakshmi-ns-22b2a740a"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "10px",
                  backgroundColor: "#0b1426",
                  border: "1px solid #1e3a5f",
                  color: "#38bdf8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href=""
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "10px",
                  backgroundColor: "#0b1426",
                  border: "1px solid #1e3a5f",
                  color: "#38bdf8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={3} md={3} sm={6}>
            <h5 className="fw-bold mb-4">
              Quick <span style={{ color: "#38bdf8" }}>Links</span>
            </h5>

            <div className="d-flex flex-column gap-2">
              <a
                href="/"
                style={{
                  color: "#a8b3c7",
                  textDecoration: "none",
                }}
              >
                Home
              </a>

              <a
                href="/about"
                style={{
                  color: "#a8b3c7",
                  textDecoration: "none",
                }}
              >
                About
              </a>

              <a
                href="/projects"
                style={{
                  color: "#a8b3c7",
                  textDecoration: "none",
                }}
              >
                Projects
              </a>

              <a
                href="/contact"
                style={{
                  color: "#a8b3c7",
                  textDecoration: "none",
                }}
              >
                Contact
              </a>
            </div>
          </Col>

          {/* Contact */}
          <Col lg={4} md={3} sm={6}>
            <h5 className="fw-bold mb-4">
              Contact <span style={{ color: "#38bdf8" }}>Me</span>
            </h5>

            <div className="d-flex align-items-center mb-3">
              <FaEnvelope
                style={{
                  color: "#38bdf8",
                  marginRight: "12px",
                }}
              />

              <span style={{ color: "#a8b3c7" }}>
                nsreelakshmi041@gmail.com
              </span>
            </div>

            <div className="d-flex align-items-center mb-3">
              <FaPhone
                style={{
                  color: "#38bdf8",
                  marginRight: "12px",
                }}
              />

              <span style={{ color: "#a8b3c7" }}>
                +91 8589069464
              </span>
            </div>

            <div className="d-flex align-items-center">
              <FaMapMarkerAlt
                style={{
                  color: "#38bdf8",
                  marginRight: "12px",
                }}
              />

              <span style={{ color: "#a8b3c7" }}>
                Kerala, India
              </span>
            </div>
          </Col>
        </Row>

        {/* Bottom Footer */}
        <div
          className="py-3"
          style={{
            borderTop: "1px solid #1e3a5f",
          }}
        >
          <Row className="align-items-center text-center text-md-start">

            <Col md={6}>
              <p
                className="mb-0"
                style={{
                  color: "#7f8da3",
                  fontSize: "14px",
                }}
              >
                © {new Date().getFullYear()} Sreelakshmi. All Rights Reserved.
              </p>
            </Col>

            <Col md={6}>
              <p
                className="mb-0 text-md-end mt-2 mt-md-0"
                style={{
                  color: "#7f8da3",
                  fontSize: "14px",
                }}
              >
                Designed & Developed with{" "}
                <span style={{ color: "#38bdf8" }}>React</span>
              </p>
            </Col>

          </Row>
        </div>
      </Container>
    </footer>
  );
}
