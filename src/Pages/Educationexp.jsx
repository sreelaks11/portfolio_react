import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

export default function Education() {
  const education = [
    {
      degree: "Secondary Education",
      institution: "GHSS Erumapetty, Thrissur",
      period: "2019 - 2020",
      description:
        "Completed secondary education with excellent academic performance and a strong foundation for higher studies.",
      score: "Percentage: 98%",
      icon: "🏫",
    },

    {
      degree: "Higher Secondary Education",
      institution: "GHSS Erumapetty, Thrissur",
      period: "2020 - 2022",
      description:
        "Completed higher secondary education with a strong academic foundation and excellent academic performance.",
      score: "Percentage: 90%",
      icon: "📚",
    },

    {
      degree: "B.Tech in Information Technology",
      institution: "Government Engineering College, Idukki",
      period: "2022 - 2026",
      description:
        "Completed Bachelor of Technology in Information Technology with a strong foundation in programming, databases, web development and software engineering.",
      score: "CGPA: 7.1 / 10",
      icon: "🎓",
    },
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

        {/* ================= PAGE HEADING ================= */}

        <div className="text-center mb-5">

          <p
            style={{
              color: "#38bdf8",
              letterSpacing: "3px",
              fontWeight: "700",
              fontSize: "14px",
            }}
          >
            MY JOURNEY
          </p>

          <h1 className="display-5 fw-bold">
            Education &{" "}
            <span style={{ color: "#38bdf8" }}>
              Experience
            </span>
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
              maxWidth: "650px",
              color: "#d1d5db",
              lineHeight: "1.8",
              fontSize: "16px",
            }}
          >
            My academic journey and professional training have helped
            me build a strong foundation in technology and web development.
          </p>

        </div>

        {/* ================= EDUCATION ================= */}

        <h2
          className="fw-bold mb-4 text-center"
          style={{
            color: "#ffffff",
          }}
        >
          Educational{" "}
          <span style={{ color: "#38bdf8" }}>
            Qualifications
          </span>
        </h2>

        <Row className="g-4 justify-content-center">

          {education.map((item, index) => (

            <Col
              key={index}
              xl={10}
              lg={10}
              md={12}
              sm={12}
            >

              <Card
                className="border-0"
                style={{
                  backgroundColor: "#0b1426",
                  border: "1px solid #1e3a5f",
                  borderRadius: "18px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                }}
              >

                <Card.Body className="p-4 p-md-5">

                  <Row className="align-items-center g-4">

                    {/* ICON */}

                    <Col
                      md={2}
                      sm={12}
                      className="text-center"
                    >

                      <div
                        className="mx-auto d-flex align-items-center justify-content-center"
                        style={{
                          width: "80px",
                          height: "80px",
                          borderRadius: "18px",
                          backgroundColor: "#172554",
                          border: "1px solid #38bdf8",
                          fontSize: "35px",
                        }}
                      >
                        {item.icon}
                      </div>

                    </Col>

                    {/* DETAILS */}

                    <Col md={7} sm={12}>

                      <p
                        className="mb-2"
                        style={{
                          color: "#38bdf8",
                          fontSize: "13px",
                          fontWeight: "700",
                          letterSpacing: "1px",
                        }}
                      >
                        {item.period}
                      </p>

                      <h3
                        className="fw-bold mb-2"
                        style={{
                          color: "#ffffff",
                        }}
                      >
                        {item.degree}
                      </h3>

                      <h6
                        className="mb-3"
                        style={{
                          color: "#cbd5e1",
                        }}
                      >
                        {item.institution}
                      </h6>

                      <p
                        className="mb-0"
                        style={{
                          color: "#d1d5db",
                          lineHeight: "1.7",
                          fontSize: "15px",
                        }}
                      >
                        {item.description}
                      </p>

                    </Col>

                    {/* SCORE */}

                    <Col
                      md={3}
                      sm={12}
                      className="text-md-end text-center"
                    >

                      <Badge
                        className="px-3 py-2"
                        style={{
                          backgroundColor: "#1e293b",
                          color: "#ffffff",
                          border: "1px solid #38bdf8",
                          fontSize: "14px",
                          borderRadius: "8px",
                        }}
                      >
                        {item.score}
                      </Badge>

                    </Col>

                  </Row>

                </Card.Body>

              </Card>

            </Col>

          ))}

        </Row>

        {/* ================= EXPERIENCE ================= */}

        <div className="mt-5 pt-4">

          <h2
            className="fw-bold mb-4 text-center"
            style={{
              color: "#ffffff",
            }}
          >
            Experience &{" "}
            <span style={{ color: "#38bdf8" }}>
              Training
            </span>
          </h2>

          <Card
            className="border-0"
            style={{
              backgroundColor: "#0b1426",
              border: "1px solid #1e3a5f",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
          >

            <Card.Body className="p-4 p-md-5">

              <Row className="align-items-center g-4">

                {/* ICON */}

                <Col
                  lg={2}
                  md={3}
                  sm={12}
                  className="text-center"
                >

                  <div
                    className="mx-auto d-flex align-items-center justify-content-center"
                    style={{
                      width: "85px",
                      height: "85px",
                      borderRadius: "20px",
                      backgroundColor: "#172554",
                      border: "1px solid #38bdf8",
                      fontSize: "38px",
                    }}
                  >
                    💻
                  </div>

                </Col>

                {/* EXPERIENCE DETAILS */}

                <Col lg={7} md={6} sm={12}>

                  <p
                    className="mb-2"
                    style={{
                      color: "#38bdf8",
                      fontSize: "13px",
                      fontWeight: "700",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    Currently Pursuing
                  </p>

                  <h3
                    className="fw-bold mb-2"
                    style={{
                      color: "#ffffff",
                    }}
                  >
                    MEARN Stack Developer Intern
                  </h3>

                  <h6
                    className="mb-3"
                    style={{
                      color: "#cbd5e1",
                    }}
                  >
                    Luminar Technolab
                  </h6>

                  <p
                    className="mb-0"
                    style={{
                      color: "#d1d5db",
                      lineHeight: "1.8",
                      fontSize: "15px",
                    }}
                  >
                    Currently undergoing practical training in MEARN
                    Stack Development, focusing on building responsive
                    and modern web applications using frontend and
                    backend technologies.
                  </p>

                </Col>

                {/* STATUS */}

                <Col
                  lg={3}
                  md={3}
                  sm={12}
                  className="text-lg-end text-center"
                >

                  <Badge
                    className="px-3 py-2"
                    style={{
                      backgroundColor: "#0f3d32",
                      color: "#4ade80",
                      border: "1px solid #4ade80",
                      fontSize: "14px",
                      borderRadius: "8px",
                    }}
                  >
                    Currently Learning
                  </Badge>

                </Col>

              </Row>

              {/* TECHNOLOGIES */}

              <div
                className="mt-4 pt-4"
                style={{
                  borderTop: "1px solid #1e3a5f",
                }}
              >

                <h6
                  className="fw-bold mb-3"
                  style={{
                    color: "#ffffff",
                  }}
                >
                  Technologies & Skills
                </h6>

                <div className="d-flex flex-wrap gap-2">

                  {[
                    "MongoDB",
                    "Express.js",
                    "React.js",
                    "Node.js",
                    "JavaScript",
                    "HTML",
                    "CSS",
                    "Bootstrap",
                    "Git",
                    "GitHub",
                  ].map((skill, index) => (

                    <Badge
                      key={index}
                      className="px-3 py-2"
                      style={{
                        backgroundColor: "#1e293b",
                        color: "#ffffff",
                        border: "1px solid #38bdf8",
                        fontSize: "13px",
                        borderRadius: "8px",
                      }}
                    >
                      {skill}
                    </Badge>

                  ))}

                </div>

              </div>

            </Card.Body>

          </Card>

        </div>

        {/* ================= JOURNEY SECTION ================= */}

        <div
          className="mt-5 p-4 p-md-5"
          style={{
            backgroundColor: "#0b1426",
            border: "1px solid #1e3a5f",
            borderRadius: "20px",
          }}
        >

          <Row className="align-items-center g-4">

            <Col lg={7} md={12}>

              <p
                style={{
                  color: "#38bdf8",
                  fontWeight: "700",
                  letterSpacing: "2px",
                  fontSize: "13px",
                }}
              >
                MY JOURNEY
              </p>

              <h2 className="fw-bold mb-3">
                My Journey in{" "}
                <span style={{ color: "#38bdf8" }}>
                  Technology
                </span>
              </h2>

              <p
                style={{
                  color: "#d1d5db",
                  lineHeight: "1.8",
                  marginBottom: "0",
                }}
              >
                My academic background in Information Technology,
                combined with my current MEARN Stack internship,
                has helped me develop both technical knowledge and
                practical development skills. I am continuously
                learning and improving my ability to build modern
                and responsive web applications.
              </p>

            </Col>

            <Col lg={5} md={12}>

              <div
                className="p-4 text-center"
                style={{
                  backgroundColor: "#111d33",
                  borderRadius: "15px",
                  border: "1px solid #1e3a5f",
                }}
              >

                <h5
                  className="fw-bold mb-3"
                  style={{
                    color: "#ffffff",
                  }}
                >
                  Current Focus
                </h5>

                <div className="d-flex flex-wrap justify-content-center gap-2">

                  {[
                    "React.js",
                    "JavaScript",
                    "Bootstrap",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                  ].map((skill, index) => (

                    <Badge
                      key={index}
                      className="px-3 py-2"
                      style={{
                        backgroundColor: "#1e293b",
                        color: "#ffffff",
                        border: "1px solid #38bdf8",
                        fontSize: "13px",
                        borderRadius: "8px",
                      }}
                    >
                      {skill}
                    </Badge>

                  ))}

                </div>

              </div>

            </Col>

          </Row>

        </div>

      </Container>
    </div>
  );
}