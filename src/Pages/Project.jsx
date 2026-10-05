import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import bankImg from "../assets/bank.png";
import gym from "../assets/gym.png";
import Eventimg from "../assets/event.png";
import furnitureimg from "../assets/furniture.png";
import hotelimg from "../assets/hotel.png";
import foodimg from "../assets/food_order_web.png";




export default function Projects() {
  const projects = [
    {
      title: "Bank Website",
      category: "Banking Website",
      description:
        "A responsive banking website with a professional interface for managing deposits, withdrawals, balances and transaction history.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: bankImg,
      live:"https://sreelaks11.github.io/farmer_bank_website/"
      
    },

    {
      title: "EventEase",
      category: "Event Management",
      description:
        "A modern event management website that allows users to explore events and provides a clean and responsive user experience.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind CSS",
        "GSAP",
      ],
      image:Eventimg,
      live:" https://sreelaks11.github.io/EventEase_web/"
     
    },

    {
      title: "Food Ordering Website",
      category: "Web Application",
      description:
        "A responsive food ordering website with an attractive interface for browsing food items and managing orders.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image:foodimg,
      live:"https://sreelaks11.github.io/food_order_website/"

     
    },

    {
      title: "Hotel Booking Website",
      category: "Booking Website",
      description:
        "A professional hotel booking website designed with responsive layouts and user-friendly booking interfaces.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image:hotelimg,
      live:"https://sreelaks11.github.io/hotel_web/"
     
    },

    {
      title: "Furniture Website",
      category: "E-Commerce Website",
      description:
        "A modern furniture website featuring product displays, responsive layouts and a clean shopping experience.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image:furnitureimg,
      live:"https://sreelaks11.github.io/furniture-website/"
     
    },

   {
  title: "Gym Pro",
  category: "Web Application",
  description:
    "A responsive gym website designed to showcase fitness programs, services, gallery, and membership options with a modern and professional user interface.",
  technologies: ["HTML5", "CSS3", "Tailwind CSS", "AOS"],
  image: gym,
  live:"https://sreelaks11.github.io/GYMWEBSITE/"
  
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
            MY WORK
          </p>

          <h1 className="display-5 fw-bold">
            My{" "}
            <span style={{ color: "#38bdf8" }}>
              Projects
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
            Here are some of the projects I have developed while
            learning and working with modern web and application
            development technologies.
          </p>

        </div>

        {/* ================= PROJECT CARDS ================= */}

        <Row className="g-4">

          {projects.map((project, index) => (

            <Col
              key={index}
              xl={4}
              lg={4}
              md={6}
              sm={12}
            >

              <Card
                className="h-100 border-0"
                style={{
                  backgroundColor: "#0b1426",
                  border: "1px solid #1e3a5f",
                  borderRadius: "18px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                }}
              >






{/* ================= PROJECT IMAGE ================= */}

<div
  style={{
    height: "200px",
    overflow: "hidden",
    borderBottom: "1px solid #1e3a5f",
  }}
>
  <img
    src={project.image}
    alt={project.title}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    }}
  />
</div>












                {/* ================= CARD BODY ================= */}

                <Card.Body className="p-4 d-flex flex-column">

                  {/* CATEGORY */}

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
                    {project.category}
                  </p>

                  {/* TITLE */}

                  <h3
                    className="fw-bold mb-3"
                    style={{
                      color: "#ffffff",
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    style={{
                      color: "#d1d5db",
                      lineHeight: "1.7",
                      fontSize: "15px",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}

                  <div className="d-flex flex-wrap gap-2 mt-2 mb-4">

                    {project.technologies.map(
                      (technology, techIndex) => (

                        <Badge
                          key={techIndex}
                          className="px-3 py-2"
                          style={{
                            backgroundColor: "#1e293b",
                            color: "#ffffff",
                            border: "1px solid #38bdf8",
                            fontWeight: "600",
                            fontSize: "14px",
                            borderRadius: "8px",
                          }}
                        >
                          {technology}
                        </Badge>

                      )
                    )}

                  </div>

                  /* ================= LIVE DEMO ================= */

                  <div
                    className="mt-auto pt-3"
                    style={{
                      borderTop: "1px solid #1e3a5f",
                    }}
                  >

                    <span
                      style={{
                        color: "#ffffff",
                        fontWeight: "600",
                      }}
                    >
                      Live Demo :{" "}
                    </span>

                    {project.live !== "" ? (

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#38bdf8",
                          textDecoration: "none",
                          fontWeight: "600",
                        }}
                      >
                        View Live Website
                      </a>

                    ) : (

                      <span
                        style={{
                          color: "#94a3b8",
                        }}
                      >
                        Not Available
                      </span>

                    )}

                  </div> 

                </Card.Body>

              </Card>

            </Col>

          ))}

        </Row>

      </Container>
    </div>
  );
}
