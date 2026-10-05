import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
} from "react-bootstrap";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

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

        {/* ================= HEADING ================= */}

        <div className="text-center mb-5">

          <p
            style={{
              color: "#38bdf8",
              letterSpacing: "3px",
              fontWeight: "700",
              fontSize: "14px",
            }}
          >
            GET IN TOUCH
          </p>

          <h1 className="display-5 fw-bold">
            Contact{" "}
            <span style={{ color: "#38bdf8" }}>
              Me
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
            Have a project, opportunity, or just want to connect?
            Feel free to reach out. I would be happy to hear from you.
          </p>

        </div>

        {/* ================= CONTACT CONTENT ================= */}

        <Row className="g-4">

          {/* ================= LEFT SIDE ================= */}

          <Col lg={5} md={12}>

            <Card
              className="h-100 border-0"
              style={{
                backgroundColor: "#0b1426",
                border: "1px solid #1e3a5f",
                borderRadius: "20px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            >

              <Card.Body className="p-4 p-md-5">

                <h2
                  className="fw-bold mb-3"
                  style={{ color: "#ffffff" }}
                >
                  Let's Connect
                </h2>

                <p
                  style={{
                    color: "#d1d5db",
                    lineHeight: "1.8",
                  }}
                >
                  I am a B.Tech graduate in Information Technology and
                  currently pursuing MEARN Stack development. I am
                  interested in building modern and responsive web
                  applications.
                </p>

                {/* EMAIL */}

                <div className="d-flex align-items-center mt-4">

                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      backgroundColor: "#172554",
                      border: "1px solid #38bdf8",
                      fontSize: "22px",
                    }}
                  >
                    ✉
                  </div>

                  <div className="ms-3">
                    <small
                      style={{
                        color: "#38bdf8",
                        fontWeight: "600",
                      }}
                    >
                      Email
                    </small>

                    <p
                      className="mb-0"
                      style={{
                        color: "#ffffff",
                        wordBreak: "break-word",
                      }}
                    >
                      nsreelakshmi041@gmail.com
                    </p>
                  </div>

                </div>

                {/* PHONE */}

                <div className="d-flex align-items-center mt-4">

                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      backgroundColor: "#172554",
                      border: "1px solid #38bdf8",
                      fontSize: "22px",
                    }}
                  >
                    ☎
                  </div>

                  <div className="ms-3">

                    <small
                      style={{
                        color: "#38bdf8",
                        fontWeight: "600",
                      }}
                    >
                      Phone
                    </small>

                    <p
                      className="mb-0"
                      style={{ color: "#ffffff" }}
                    >
                      +91 8589069464
                    </p>

                  </div>

                </div>

                {/* LOCATION */}

                <div className="d-flex align-items-center mt-4">

                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      backgroundColor: "#172554",
                      border: "1px solid #38bdf8",
                      fontSize: "22px",
                    }}
                  >
                    📍
                  </div>

                  <div className="ms-3">

                    <small
                      style={{
                        color: "#38bdf8",
                        fontWeight: "600",
                      }}
                    >
                      Location
                    </small>

                    <p
                      className="mb-0"
                      style={{ color: "#ffffff" }}
                    >
                      Kerala, India
                    </p>

                  </div>

                </div>

                {/* SOCIAL LINKS */}

                <div className="mt-5">

                  <h6
                    className="fw-bold mb-3"
                    style={{ color: "#ffffff" }}
                  >
                    Connect with me
                  </h6>

                  <div className="d-flex gap-2 flex-wrap">

                    <Button
                      href="https://github.com/sreelaks11"
                      variant="outline-info"
                      style={{
                        borderColor: "#38bdf8",
                        color: "#38bdf8",
                      }}
                    >
                      GitHub
                    </Button>

                    <Button
                      href="https://linkedin.com/in/sreelakshmi-ns-22b2a740a"
                      variant="outline-info"
                      style={{
                        borderColor: "#38bdf8",
                        color: "#38bdf8",
                      }}
                    >
                      LinkedIn
                    </Button>

                  </div>

                </div>

              </Card.Body>

            </Card>

          </Col>

          {/* ================= RIGHT SIDE - FORM ================= */}

          <Col lg={7} md={12}>

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

                <h2
                  className="fw-bold mb-4"
                  style={{ color: "#ffffff" }}
                >
                  Send Me a Message
                </h2>

                <Form onSubmit={handleSubmit}>

                  {/* NAME + EMAIL */}

                  <Row>

                    <Col md={6}>

                      <Form.Group className="mb-4">

                        <Form.Label
                          style={{
                            color: "#ffffff",
                            fontWeight: "600",
                          }}
                        >
                          Your Name
                        </Form.Label>

                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          required
                          style={{
                            backgroundColor: "#111d33",
                            border: "1px solid #1e3a5f",
                            color: "#ffffff",
                            padding: "12px",
                          }}
                        />

                      </Form.Group>

                    </Col>

                    <Col md={6}>

                      <Form.Group className="mb-4">

                        <Form.Label
                          style={{
                            color: "#ffffff",
                            fontWeight: "600",
                          }}
                        >
                          Email Address
                        </Form.Label>

                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          required
                          style={{
                            backgroundColor: "#111d33",
                            border: "1px solid #1e3a5f",
                            color: "#ffffff",
                            padding: "12px",
                          }}
                        />

                      </Form.Group>

                    </Col>

                  </Row>

                  {/* SUBJECT */}

                  <Form.Group className="mb-4">

                    <Form.Label
                      style={{
                        color: "#ffffff",
                        fontWeight: "600",
                      }}
                    >
                      Subject
                    </Form.Label>

                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enter subject"
                      required
                      style={{
                        backgroundColor: "#111d33",
                        border: "1px solid #1e3a5f",
                        color: "#ffffff",
                        padding: "12px",
                      }}
                    />

                  </Form.Group>

                  {/* MESSAGE */}

                  <Form.Group className="mb-4">

                    <Form.Label
                      style={{
                        color: "#ffffff",
                        fontWeight: "600",
                      }}
                    >
                      Message
                    </Form.Label>

                    <Form.Control
                      as="textarea"
                      rows={6}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message..."
                      required
                      style={{
                        backgroundColor: "#111d33",
                        border: "1px solid #1e3a5f",
                        color: "#ffffff",
                        padding: "12px",
                        resize: "none",
                      }}
                    />

                  </Form.Group>

                  {/* SUBMIT BUTTON */}

                  <Button
                    type="submit"
                    className="px-4 py-2"
                    style={{
                      backgroundColor: "#38bdf8",
                      borderColor: "#38bdf8",
                      color: "#06101f",
                      fontWeight: "700",
                    }}
                  >
                    Send Message
                  </Button>

                </Form>

              </Card.Body>

            </Card>

          </Col>

        </Row>

        {/* ================= BOTTOM MESSAGE ================= */}

        <div
          className="text-center mt-5 p-4"
          style={{
            backgroundColor: "#0b1426",
            border: "1px solid #1e3a5f",
            borderRadius: "18px",
          }}
        >

          <p
            className="mb-0"
            style={{
              color: "#d1d5db",
              lineHeight: "1.8",
            }}
          >
            Looking forward to connecting and discussing new
            opportunities!
          </p>

        </div>

      </Container>
    </div>
  );
}