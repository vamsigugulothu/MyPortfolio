import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Default from "../Images/Default.png"

const ProjectCard = (props) => {
    const {
        title,
        skills,
        description,
        image,
        livelink
    } = props;

    const github = "https://github.com/vamsigugulothu"
    return (
        <Container className="my-5" >
            <Row style={{ boxShadow: "0px 0px 2px 2px #be6adf "}}>
                <Col md={4} className="p-2">
                    <img
                        src={ image ? image : Default}
                        alt="home pic"
                        className="rounded"
                        style={{ maxHeight: "220px", minHeight: "220px", maxWidth: "350px", minWidth: "350px"}}
                    />
                </Col>
                <Col md={8} className=" text-white p-2 shadow bg-body">
                    <div className="p-2 d-flex justify-content-between align-items-center">
                        <h4 className="text-left font-weight-bold" style={{color: "#be6adf "}}>
                            {title}
                        </h4>
                        <a class="btn btn-primary btn-sm" style={{ backgroundColor:"#be6adf"}} target="_blank" href={!livelink ? github : livelink}>Live</a>
                    </div>
                    <div className="px-2 text-left d-flex flex-wrap align-items-center">
                        Technologies:  
                        { skills?.map((skill) => {
                            return <span className="rounded-pill bg-secondary text-wrap px-2 py-1 mx-1">{skill}</span>
                        })}
                    </div>
                    <p className="px-2 mt-2 text-left">
                        Description: {description}
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default ProjectCard;