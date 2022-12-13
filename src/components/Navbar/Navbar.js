import React from "react";
import logo from "../../images/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

function Navi() {
  return (
    <Navbar className="navbar__container" bg="" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
          Japanese Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Popular</Nav.Link>
            <Nav.Link href="#link">Recently</Nav.Link>
            <Nav.Link href="#link">Newsletter</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navi;
