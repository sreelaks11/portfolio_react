import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import profileImg from "../assets/portfolio-img.jpeg";

export default function About() {
  return (
    <div
      style={{
        backgroundColor: "#050b17",
        color: "#ffffff",
        minHeight: "100vh",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <Container>
        {/* Heading */}
        <div className="text-center mb-5">
          <p
            style={{
              color: "#38bdf8",
              letterSpacing: "3px",
              fontWeight: "600",
            }}
          >
            ABOUT ME
          </p>

          <h1 className="fw-bold display-5">
            Get to Know <span style={{ color: "#38bdf8" }}>Me</span>
          </h1>

          <div
            style={{
              width: "70px",
              height: "4px",
              backgroundColor: "#38bdf8",
              margin: "15px auto",
              borderRadius: "10px",
            }}
          />
        </div>

        {/* About Section */}
        <Row className="align-items-center g-5">
          {/* Left Side */}
          <Col lg={5} md={12}>
            <div
              className="p-4 p-md-5 text-center"
              style={{
                backgroundColor: "#0b1426",
                border: "1px solid #1e3a5f",
                borderRadius: "20px",
                boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
              }}
            >
             






<div
  className="mx-auto mb-4 d-flex align-items-center justify-content-center"
  style={{
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    overflow: "hidden",
    border: "3px solid #38bdf8",
  }}
>
  <img
    src={profileImg}
    alt="Sreelakshmi"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />
</div>

<h3 className="fw-bold mb-2">Sreelakshmi</h3>








              <p
                style={{
                  color: "#38bdf8",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                MEARN Stack Developer
              </p>

              <p
                style={{
                  color: "#a8b3c7",
                  lineHeight: "1.8",
                }}
              >
                Passionate about creating modern, responsive and
                user-friendly web applications using modern web
                technologies.
              </p>
            </div>
          </Col>

          {/* Right Side */}
          <Col lg={7} md={12}>
            <div>
              <h2 className="fw-bold mb-4">
                Hello, I'm <span style={{ color: "#38bdf8" }}>Sreelakshmi</span>
              </h2>

              <p
                style={{
                  color: "#b8c1d1",
                  fontSize: "17px",
                  lineHeight: "1.9",
                }}
              >
                I am a passionate MEARN Stack Developer who enjoys building
                modern and responsive web applications. I have a strong
                interest in frontend development and creating clean,
                professional user interfaces.
              </p>

              <p
                style={{
                  color: "#b8c1d1",
                  fontSize: "17px",
                  lineHeight: "1.9",
                }}
              >
                I work with technologies such as MongoDB, Express.js,
                React.js and Node.js. I also use HTML, CSS, JavaScript and
                Bootstrap to develop responsive and user-friendly websites.
              </p>

              <p
                style={{
                  color: "#b8c1d1",
                  fontSize: "17px",
                  lineHeight: "1.9",
                }}
              >
                I am continuously learning new technologies and improving my
                development skills by working on real-world projects.
              </p>

              {/* Skills */}
              <div className="mt-4">
                <h5 className="fw-bold mb-3">Technologies I Work With</h5>

                <div className="d-flex flex-wrap gap-2">
                  <Badge
                    className="px-3 py-2"
                    style={{
                      backgroundColor: "#172554",
                      color: "#60a5fa",
                      fontSize: "14px",
                    }}
                  >
                    MongoDB
                  </Badge>

                  <Badge
                    className="px-3 py-2"
                    style={{
                      backgroundColor: "#172554",
                      color: "#60a5fa",
                      fontSize: "14px",
                    }}
                  >
                    Express.js
                  </Badge>

                  <Badge
                    className="px-3 py-2"
                    style={{
                      backgroundColor: "#172554",
                      color: "#60a5fa",
                      fontSize: "14px",
                    }}
                  >
                    React.js
                  </Badge>

                  <Badge
                    className="px-3 py-2"
                    style={{
                      backgroundColor: "#172554",
                      color: "#60a5fa",
                      fontSize: "14px",
                    }}
                  >
                    Node.js
                  </Badge>

                  <Badge
                    className="px-3 py-2"
                    style={{
                      backgroundColor: "#172554",
                      color: "#60a5fa",
                      fontSize: "14px",
                    }}
                  >
                    JavaScript
                  </Badge>

                  <Badge
                    className="px-3 py-2"
                    style={{
                      backgroundColor: "#172554",
                      color: "#60a5fa",
                      fontSize: "14px",
                    }}
                  >
                    Bootstrap
                  </Badge>

                  <Badge
                    className="px-3 py-2"
                    style={{
                      backgroundColor: "#172554",
                      color: "#60a5fa",
                      fontSize: "14px",
                    }}
                  >
                    HTML
                  </Badge>

                  <Badge
                    className="px-3 py-2"
                    style={{
                      backgroundColor: "#172554",
                      color: "#60a5fa",
                      fontSize: "14px",
                    }}
                  >
                    CSS
                  </Badge>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Cards */}
        <Row className="g-4 mt-5">
          <Col lg={4} md={6} sm={12}>
            <Card
              className="h-100 border-0"
              style={{
                backgroundColor: "#0b1426",
                color: "#ffffff",
                borderRadius: "18px",
                border: "1px solid #1e3a5f",
              }}
            >
              <Card.Body className="p-4">
                <div
                  className="mb-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    backgroundColor: "#172554",
                    color: "#38bdf8",
                    fontSize: "22px",
                  }}
                >
                  💻
                </div>

                <h4 className="fw-bold">Web Development</h4>

                <p
                  style={{
                    color: "#9ca9bc",
                    lineHeight: "1.7",
                  }}
                >
                  Building responsive and modern websites with clean and
                  maintainable code.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Card
              className="h-100 border-0"
              style={{
                backgroundColor: "#0b1426",
                color: "#ffffff",
                borderRadius: "18px",
                border: "1px solid #1e3a5f",
              }}
            >
              <Card.Body className="p-4">
                <div
                  className="mb-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    backgroundColor: "#172554",
                    color: "#38bdf8",
                    fontSize: "22px",
                  }}
                >
                  ⚛️
                </div>

                <h4 className="fw-bold">React Development</h4>

                <p
                  style={{
                    color: "#9ca9bc",
                    lineHeight: "1.7",
                  }}
                >
                  Creating reusable React components and responsive interfaces
                  for modern web applications.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Card
              className="h-100 border-0"
              style={{
                backgroundColor: "#0b1426",
                color: "#ffffff",
                borderRadius: "18px",
                border: "1px solid #1e3a5f",
              }}
            >
              <Card.Body className="p-4">
                <div
                  className="mb-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    backgroundColor: "#172554",
                    color: "#38bdf8",
                    fontSize: "22px",
                  }}
                >
                  🚀
                </div>

                <h4 className="fw-bold">Continuous Learning</h4>

                <p
                  style={{
                    color: "#9ca9bc",
                    lineHeight: "1.7",
                  }}
                >
                  Always exploring new technologies and improving my skills
                  through projects and practical development.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Personal Details */}
        <div
          className="mt-5 p-4 p-md-5"
          style={{
            backgroundColor: "#0b1426",
            borderRadius: "20px",
            border: "1px solid #1e3a5f",
          }}
        >
          <h3 className="fw-bold mb-4">
            <span style={{ color: "#38bdf8" }}>Personal</span> Details
          </h3>

          <Row className="g-3">
            <Col md={6}>
              <p className="mb-2">
                <strong style={{ color: "#ffffff" }}>Name:</strong>{" "}
                <span style={{ color: "#a8b3c7" }}>Sreelakshmi</span>
              </p>
            </Col>

            <Col md={6}>
              <p className="mb-2">
                <strong style={{ color: "#ffffff" }}>Role:</strong>{" "}
                <span style={{ color: "#a8b3c7" }}>
                  MEARN Stack Developer
                </span>
              </p>
            </Col>

            <Col md={6}>
              <p className="mb-2">
                <strong style={{ color: "#ffffff" }}>Experience:</strong>{" "}
                <span style={{ color: "#a8b3c7" }}>Fresher</span>
              </p>
            </Col>

            <Col md={6}>
              <p className="mb-2">
                <strong style={{ color: "#ffffff" }}>Focus:</strong>{" "}
                <span style={{ color: "#a8b3c7" }}>
                  Full Stack Web Development
                </span>
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}