import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import TypeWrite from "../components/TypeWrite";
import Intro from "../components/Intro";
import Footer from "../components/Footer";

import homeLogo from "../Images/Home.png";

const Home = () => {
    return (
    <section>
        <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15,fontSize: "2.4em"}} className="pl-5">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> VAMSI GUGULOTHU</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <TypeWrite />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Intro />
    </section>
    )
}

export default Home;