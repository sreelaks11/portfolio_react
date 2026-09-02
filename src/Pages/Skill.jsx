import React from "react";
import { Container, Row, Col, Card, ProgressBar, Badge } from "react-bootstrap";

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      level: 90,
      icon: "🌐",
      description: "Building semantic and structured web pages.",
    },
    {
      name: "CSS",
      level: 85,
      icon: "🎨",
      description: "Creating responsive and attractive user interfaces.",
    },
    {
      name: "JavaScript",
      level: 80,
      icon: "⚡",
      description: "Developing interactive and dynamic web applications.",
    },
    {
      name: "React.js",
      level: 85,
      icon: "⚛️",
      description: "Building reusable and responsive React components.",
    },
    {
      name: "Bootstrap",
      level: 90,
      icon: "🅱️",
      description: "Creating responsive layouts using Bootstrap components.",
    },
    {
      name: "Node.js",
      level: 75,
      icon: "🟢",
      description: "Developing backend applications and APIs.",
    },
    {
      name: "Express.js",
      level: 75,
      icon: "🚀",
      description: "Building REST APIs and backend services.",
    },
    {
      name: "MongoDB",
      level: 70,
      icon: "🍃",
      description: "Working with NoSQL databases and data management.",
    },
  ];

  const tools = [
    "Git",
    "GitHub",
    "VS Code",
    "Firebase",
    "REST API",
    "Responsive Design",
  ];

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
            MY SKILLS
          </p>

          <h1 className="display-5 fw-bold">
            Technical <span style={{ color: "#38bdf8" }}>Skills</span>
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

          <p
            className="mx-auto mt-3"
            style={{
              color: "#9ca9bc",
              maxWidth: "650px",
              lineHeight: "1.8",
            }}
          >
            I have experience with modern web technologies and enjoy
            developing responsive, user-friendly and professional web
            applications.
          </p>
        </div>

        {/* Skills Cards */}
        <Row className="g-4">
          {skills.map((skill, index) => (
            <Col key={index} xl={3} lg={4} md={6} sm={12}>
              <Card
                className="h-100 border-0"
                style={{
                  backgroundColor: "#0b1426",
                  border: "1px solid #1e3a5f",
                  borderRadius: "18px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                }}
              >
                <Card.Body className="p-4">

                  {/* Icon */}
                  <div
                    className="d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "55px",
                      height: "55px",
                      borderRadius: "14px",
                      backgroundColor: "#172554",
                      fontSize: "25px",
                    }}
                  >
                    {skill.icon}
                  </div>

                  {/* Skill Name */}
                  <h4 className="fw-bold mb-2">
                    {skill.name}
                  </h4>

                  <p
                    style={{
                      color: "#8f9caf",
                      fontSize: "14px",
                      minHeight: "45px",
                    }}
                  >
                    {skill.description}
                  </p>

                  {/* Percentage */}
                  <div className="d-flex justify-content-between mb-2">
                    <span
                      style={{
                        color: "#cbd5e1",
                        fontSize: "14px",
                      }}
                    >
                      Proficiency
                    </span>

                    <span
                      style={{
                        color: "#38bdf8",
                        fontWeight: "600",
                      }}
                    >
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress */}
                  <ProgressBar
                    now={skill.level}
                    style={{
                      height: "7px",
                      backgroundColor: "#172033",
                    }}
                  />

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Tools Section */}
        <div className="mt-5 pt-4">

          <div className="text-center mb-4">
            <h2 className="fw-bold">
              Tools & <span style={{ color: "#38bdf8" }}>Technologies</span>
            </h2>

            <p style={{ color: "#8f9caf" }}>
              Tools I use while developing projects
            </p>
          </div>

          <div
            className="p-4 p-md-5 text-center"
            style={{
              backgroundColor: "#0b1426",
              border: "1px solid #1e3a5f",
              borderRadius: "20px",
            }}
          >
            <div className="d-flex flex-wrap justify-content-center gap-3">

              {tools.map((tool, index) => (
                <Badge
                  key={index}
                  className="px-4 py-3"
                  style={{
                    backgroundColor: "#172554",
                    color: "#60a5fa",
                    fontSize: "15px",
                    border: "1px solid #1e3a5f",
                    borderRadius: "10px",
                  }}
                >
                  {tool}
                </Badge>
              ))}

            </div>
          </div>

        </div>

        {/* MEARN Stack */}
        <div className="mt-5">

          <Row className="align-items-center g-4">

            <Col lg={6} md={12}>
              <h2 className="fw-bold mb-3">
                MEARN <span style={{ color: "#38bdf8" }}>Stack</span>
              </h2>

              <p
                style={{
                  color: "#a8b3c7",
                  lineHeight: "1.9",
                }}
              >
                As a MEARN Stack Developer, I work with both frontend and
                backend technologies to build complete web applications.
                I focus on responsive design, reusable components and
                creating smooth user experiences.
              </p>
            </Col>

            <Col lg={6} md={12}>
              <div
                className="p-4"
                style={{
                  backgroundColor: "#0b1426",
                  border: "1px solid #1e3a5f",
                  borderRadius: "18px",
                }}
              >
                <Row className="g-3 text-center">

                  <Col xs={6}>
                    <div
                      className="p-3"
                      style={{
                        backgroundColor: "#111d33",
                        borderRadius: "12px",
                      }}
                    >
                      <h4 style={{ color: "#38bdf8" }}>M</h4>
                      <small style={{ color: "#b8c1d1" }}>
                        MongoDB
                      </small>
                    </div>
                  </Col>

                  <Col xs={6}>
                    <div
                      className="p-3"
                      style={{
                        backgroundColor: "#111d33",
                        borderRadius: "12px",
                      }}
                    >
                      <h4 style={{ color: "#38bdf8" }}>E</h4>
                      <small style={{ color: "#b8c1d1" }}>
                        Express.js
                      </small>
                    </div>
                  </Col>

                  <Col xs={6}>
                    <div
                      className="p-3"
                      style={{
                        backgroundColor: "#111d33",
                        borderRadius: "12px",
                      }}
                    >
                      <h4 style={{ color: "#38bdf8" }}>A</h4>
                      <small style={{ color: "#b8c1d1" }}>
                        Angular
                      </small>
                    </div>
                  </Col>

                  <Col xs={6}>
                    <div
                      className="p-3"
                      style={{
                        backgroundColor: "#111d33",
                        borderRadius: "12px",
                      }}
                    >
                      <h4 style={{ color: "#38bdf8" }}>R</h4>
                      <small style={{ color: "#b8c1d1" }}>
                        React.js
                      </small>
                    </div>
                  </Col>

                  <Col xs={12}>
                    <div
                      className="p-3"
                      style={{
                        backgroundColor: "#111d33",
                        borderRadius: "12px",
                      }}
                    >
                      <h4 style={{ color: "#38bdf8" }}>N</h4>
                      <small style={{ color: "#b8c1d1" }}>
                        Node.js
                      </small>
                    </div>
                  </Col>

                </Row>
              </div>
            </Col>

          </Row>
        </div>

      </Container>
    </div>
  );
}