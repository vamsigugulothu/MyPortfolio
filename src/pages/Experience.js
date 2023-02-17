import React from "react";
import { Container } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Footer from "../components/Footer";

const Experience = () => {
    return (
    <section>
        <Container className="" style={{ marginTop: "120px", marginBottom: "100px"}}>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2022 may - 2023 jan"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                >
                    <h5 style={{ textAlign: "center"}}>Software Developer</h5>
                    <p>Learnyst Insight Private Limited</p>
                    <p>Skills: Html, Theme UI, Javascript, React js, Redux & React native</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2021 Oct - 2021 Dec"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                >
                    <h5 style={{ textAlign: "center"}}>Web developer</h5>
                    <p>Learnyst Insight Private Limited</p>
                    <p>Skills: Html, Theme UI, Javascript, Php</p>
                </VerticalTimelineElement>
            </VerticalTimeline>

        </Container>
        <Footer/>
    </section>
    );
}

export default Experience;