import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../Images/person.svg";
import Tilt from "react-parallax-tilt";


const Intro = () => {
    return (
        <Container fluid className="position-relative" id="about" style={{ paddingTop: "90px",paddingBottom: "90px" }}>
          <Container>
            <Row>
              <Col md={8} className="text-white pt-6 pb-2 text-center">
                <h1 style={{ fontSize: "2.6em" }}>
                  Who am I ?
                </h1>
                <p className="pt-5 text-left" style={{ fontSize: "1.5em" }}>
                  Curious to learns something new Everyday and I'm good at Programming and Web developing
                  <i>
                    <b className="purple"> Python, Javascript and React js. </b>
                  </i>
                  <br />
                    Interested in developing <b className="purple">Web and Apps</b> that people use in their day to day life &nbsp;
                  <br />
                  Whenever possible, I also apply my passion for developing products
                  with <b className="purple">Node.js</b> and
                  <i>
                    <b className="purple">
                      {" "}
                      Modern Javascript Library and Frameworks
                    </b>
                  </i>
                  &nbsp; like
                  <i>
                    <b className="purple"> React.js and Next.js</b>
                  </i>
                </p>
              </Col>
              <Col md={4} className="justify-content-center" style={{paddingTop: "80px"}}>
                <Tilt>
                  <img src={myImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
          </Container>
        </Container>);
}

export default Intro;