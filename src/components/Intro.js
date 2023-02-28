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
                  I'm the one who is curious to learns new things everyday.
                  {/* <i>
                    <b className="purple">Javascript</b>
                  </i> */}
                  <br />
                    Interested in developing <b className="purple">Web and Apps</b> that people use in their day to day life. &nbsp;
                  <br />
                  I love to share new things with others and i had a dream to start my own startup company.
                  {/* with <b className="purple">Node.js</b> and */}
                  <br/>
                  I love to work with Modern
                  <i>
                    <b className="purple">
                      {" "}
                       Javascript Libraries, Frameworks and all about web and apps.
                    </b>
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