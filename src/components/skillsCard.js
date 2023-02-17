import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as Icons from "react-icons/fa";

const SkillsCard = ({iconName, name}) => {
        const FaIcon = Icons[iconName];
        // if (!FaIcon){
        //     return <p>{iconName[2]}</p>;
        // }

    return (
        <div className="rounded border m-2"
            style={{
                height: "100px",
                maxHeight: "100px",
                maxWidth: "100px",
                minWidth: "90px",
            }}
        >
            { FaIcon ? <FaIcon className="text-white p-2 "  size="55" /> : <p className="h4 pt-4 text-white">{ iconName?.substring(0,2) }</p> }
            <p className="mt-2 text-white">{name}</p>
        </div>    
    );
}

export default SkillsCard;