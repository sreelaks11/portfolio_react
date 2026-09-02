import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Pagehome() {
  return (
    <section
      style={{
        backgroundColor: '#0F172A',
        minHeight: 'calc(100vh - 76px)',
        color: '#F8FAFC',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container className="py-5">
        <Row className="align-items-center gy-5">

          {/* Left Content */}
          <Col lg={7} md={7} sm={12} className="text-center text-md-start">

            <p
              className="fw-semibold mb-3"
              style={{
                color: '#06B6D4',
                letterSpacing: '2px',
              }}
            >
              PORTFOLIO
            </p>

            <h1
              className="fw-bold display-3 mb-3"
              style={{
                color: '#F8FAFC',
              }}
            >
              Hi, I'm{' '}
              <span style={{ color: '#06B6D4' }}>
                Sreelakshmi ns
              </span>
            </h1>

            <h2
              className="fw-semibold mb-4"
              style={{
                color: '#CBD5E1',
              }}
            >
              MEARN Stack Developer
            </h2>

            <p
              className="lead mb-4"
              style={{
                color: '#94A3B8',
                maxWidth: '650px',
                lineHeight: '1.8',
              }}
            >
              I am a passionate developer who enjoys creating modern,
              responsive and user-friendly web applications. I love
              turning ideas into clean and professional digital experiences.
            </p>

            {/* Buttons */}
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start">

              <Button
                as={Link}
                to="/projects"
                size="lg"
                className="px-4 py-2 fw-semibold border-0"
                style={{
                  backgroundColor: '#06B6D4',
                  color: '#020617',
                }}
              >
                View My Projects
              </Button>

              <Button
                as={Link}
                to="/contact"
                size="lg"
                variant="outline-light"
                className="px-4 py-2 fw-semibold"
                style={{
                  borderColor: '#06B6D4',
                  color: '#06B6D4',
                }}
              >
                Contact Me
              </Button>

            </div>

          </Col>

          {/* Right Profile Section */}
          <Col
            lg={5}
            md={5}
            sm={12}
            className="d-flex justify-content-center"
          >

            <div
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: 'min(350px, 75vw)',
                height: 'min(350px, 75vw)',
                backgroundColor: '#020617',
                border: '3px solid #06B6D4',
                boxShadow: '0 0 40px rgba(6, 182, 212, 0.25)',
              }}
            >
              <div className="text-center px-4">

                <div
                  className="fw-bold"
                  style={{
                    fontSize: 'clamp(3rem, 8vw, 5rem)',
                    color: '#06B6D4',
                  }}
                >
                  &lt;/&gt;
                </div>

                <p
                  className="mb-0 fw-semibold"
                  style={{
                    color: '#CBD5E1',
                  }}
                >
                  Developer
                </p>

              </div>
            </div>

          </Col>

        </Row>
      </Container>
    </section>
  )
}