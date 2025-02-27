"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import avt from "../app/avt.png";


function Header() {
    const imgStyle = {
        borderRadius: "50%",
        border: "2px solid #ccc",
        width: "2em",
        height: "2em",
      };
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">

          <Image
            alt="NextJS"
            src={avt}
            style={imgStyle}
            className="d-inline-block align-top"
          />
          <span className="ms-2" style={{fontWeight:"bold"}}>NextJS</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="https://www.facebook.com/min.tay.ne">Contact me!</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
