import React, { useState } from "react";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Nav from "react-bootstrap/Nav";
// import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import { CgGitFork } from "react-icons/cg";
// import { ImBlog } from "react-icons/im";
// import {
//   AiFillStar,
//   AiOutlineHome,
//   AiOutlineFundProjectionScreen,
//   AiOutlineUser,
// } from "react-icons/ai";

// import { CgFileDocument } from "react-icons/cg";

const NavBar = () => {

    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);
  
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }
  
    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour ? "sticky" : "navbar"}
        >
        <Container>
          <Navbar.Brand href="/">My Portfolio</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
                updateExpanded(expand ? false : "expanded");
            }}
            >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ms-auto" defaultActiveKey="#home">
                <Nav.Item>
                    <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                        Home{/* <AiOutlineHome style={{ marginBottom: "2px" }} /> Home */}
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                        About{/* <AiOutlineHome style={{ marginBottom: "2px" }} /> Home */}
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/projects" onClick={() => updateExpanded(false)}>
                        Projects{/* <AiOutlineHome style={{ marginBottom: "2px" }} /> Home */}
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/Experience" onClick={() => updateExpanded(false)}>
                        Experience{/* <AiOutlineHome style={{ marginBottom: "2px" }} /> Home */}
                    </Nav.Link>
                </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavBar;