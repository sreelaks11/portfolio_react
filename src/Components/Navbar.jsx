import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";

export default function MyNavbar() {

  

  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="py-3"
      style={{
        backgroundColor: '#0F172A',
      }}
    >
      <Container>

        {/* Logo / Brand */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold text-white fs-4"
        >
          MyPortfolio
        </Navbar.Brand>

        {/* Mobile Menu Button */}
        <Navbar.Toggle
          aria-controls="main-navbar"
          className="border-0 shadow-none"
        />

        {/* Navigation Links */}
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-lg-center gap-lg-2">


<Nav.Link
  as={NavLink}
  to="/"
  className="px-3"
  style={({ isActive }) => ({
    color: isActive ? "#38bdf8" : "white",
    textDecoration: isActive ? "underline" : "none",
    textDecorationColor: "#38bdf8",
    textDecorationThickness: "2px",
    textUnderlineOffset: "6px",
  })}
>
  Home
</Nav.Link>




<Nav.Link
  as={NavLink}
  to="/about"
  className="px-3"
  style={({ isActive }) => ({
    color: isActive ? "#38bdf8" : "white",
    textDecoration: isActive ? "underline" : "none",
    textDecorationColor: "#38bdf8",
    textDecorationThickness: "2px",
    textUnderlineOffset: "6px",
  })}
>
  About
</Nav.Link>





            <Nav.Link
  as={NavLink}
  to="/skills"
  className="px-3"
  style={({ isActive }) => ({
    color: isActive ? "#38bdf8" : "white",
    textDecoration: isActive ? "underline" : "none",
    textDecorationColor: "#38bdf8",
    textDecorationThickness: "2px",
    textUnderlineOffset: "6px",
  })}
>
  Skills
</Nav.Link>






          <Nav.Link
  as={NavLink}
  to="/projects"
  className="px-3"
  style={({ isActive }) => ({
    color: isActive ? "#38bdf8" : "white",
    textDecoration: isActive ? "underline" : "none",
    textDecorationColor: "#38bdf8",
    textDecorationThickness: "2px",
    textUnderlineOffset: "6px",
  })}
>
  Projects
</Nav.Link>

            <Nav.Link
  as={NavLink}
  to="/education"
  className="px-3"
  style={({ isActive }) => ({
    color: isActive ? "#38bdf8" : "white",
    textDecoration: isActive ? "underline" : "none",
    textDecorationColor: "#38bdf8",
    textDecorationThickness: "2px",
    textUnderlineOffset: "6px",
  })}
>
  Education
</Nav.Link>

           <Nav.Link
  as={NavLink}
  to="/contact"
  className="px-3"
  style={({ isActive }) => ({
    color: isActive ? "#38bdf8" : "white",
    textDecoration: isActive ? "underline" : "none",
    textDecorationColor: "#38bdf8",
    textDecorationThickness: "2px",
    textUnderlineOffset: "6px",
  })}
>
  Contact
</Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}