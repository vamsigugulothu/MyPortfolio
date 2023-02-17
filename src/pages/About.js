import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import SkillsCard from "../components/skillsCard";

import aboutImg from "../Images/about.svg";

const About = () => {

    const skills = 
            [
             {"skill":"Python","icon":"FaPython"},
             {"skill":"Html","icon":"FaHtml5"},
             {"skill":"CSS","icon":"FaCss3"},
             {"skill":"Bootstrap","icon":"FaBootstrap"},
             {"skill":"Javascript","icon":"FaJs"},
             {"skill":"React js","icon":"FaReact"},
             {"skill":"PHP","icon":"FaPhp"},
             {"skill":"MySql","icon":"FaFish"},
             {"skill":"Redux","icon":"FaReact"},
             {"skill":"Github","icon":"FaGithub"},
            ];

    const tools = [
        {"toolname": "Photoshop","icon":"Photoshop"},
        {"toolname": "VS Code","icon":"Vs"},
        {"toolname": "Postman","icon":"Ps"},
        {"toolname": "Adobe XD","icon":"Adobexd"},
    ];
    return (
    <section>
        <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px"}}>
            <Col md={7} className="home-header" style={{
              justifyContent: "center",
            //   paddingTop: "20px",
              paddingBottom: "50px",
            }}>
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                    About <strong className="purple">Me..</strong>
                </h1>
                <p style={{ textAlign: "justify", fontSize: "1.5em" }}>
                    Hi Everyone, I am <span className="purple">Vamsi </span>
                    from <span className="purple"> Andhra Pradesh, India.</span>
                    <br />I studied at RGUKT-SRIKAKULAM in Computer Science Department and 
                    graduated in the year 2022. currently, i'm a <span className="purple">Software Developer.</span>
                    <br />
                    <br />
                    Extra activities that I love to do are..
                </p>
                <ul className="pl-0" style={{ listStyleType: "none"}}>
                    <li className="text-left">
                    Playing & Watching Cricket
                    </li>
                    <li className="text-left">
                    Drawing/Pencil sketch.
                    </li>
                    <li className="text-left">
                    Travelling..
                    </li>
                </ul>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={aboutImg}
                alt="about"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

        <Container fluid className="py-2" style={{ marginTop:"60px", marginBottom:"60px"}}>
            <p className="h3 align-items-center text-white">Skills</p>
          <Row>
            <Col className="md-12">
                <div className="d-flex flex-wrap align-items-center justify-content-center">
                    {skills?.map((skill) => {
                        return <SkillsCard iconName={skill.icon} name={skill.skill} />
                    })}
                </div>
            </Col>
          </Row>
        </Container>
        <Container fluid className="py-2" style={{ marginTop:"80px", marginBottom:"80px"}}>
            <p className="h3 align-items-center text-white">Tools</p>
          <Row>
            <Col className="md-12">
                <div className="d-flex flex-wrap align-items-center justify-content-center">
                    {tools?.map((tool) => {
                        return <SkillsCard iconName={tool.icon} name={tool.toolname} />
                    })}
                </div>
            </Col>
          </Row>
        </Container>
      <Footer/>
    </section>
    )
}

export default About;