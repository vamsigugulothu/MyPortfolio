import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    const d = new Date();
    let year = d.getFullYear();
  return (
    <Container fluid className="py-2 mb-0" style={{ backgroundColor: "rgb(10, 4, 22)"}}>
      <Row>
        <Col md="4" className="text-center">
          <p className="text-white p-2">Designed & Developed by Vamsi G</p>
        </Col>
        <Col md="4" className="footer-copywright">
          <p className="text-white p-2">Copyright © {year} GVS</p>
        </Col>
        <Col md="4" className="">
          <ul className="d-flex mx-auto" style={{ listStyleType: "none"}}>
            <li className="p-2 ml-auto">
              <a
                href="https://github.com/vamsigugulothu"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="p-2">
              <a
                href="#"
                style={{ color: "white" }}
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="p-2">
              <a
                href="https://www.linkedin.com/in/vamsi-gugulothu-484280213/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="p-2 mr-auto">
              <a
                href="#"
                style={{ color: "white" }}
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;