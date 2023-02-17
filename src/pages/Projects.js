import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../sources/projects"


const Projects = () => {
    return (
        <section>
            <h3 className="text-center text-white" style={{ marginTop: "100px"}}>Welcome to my Projects!!</h3>
            { projects?.map( (data) => {
                return (
                <ProjectCard
                    title={data.Pname}
                    skills={data.Technologies}
                    description={data.Description}
                    image={data.Image}
                    livelink={data.Link}
                />
                );
            })}

            <p className="h5 text-center text-white my-5">More under progress..!!</p>
            
        </section>
    );
}

export default Projects;