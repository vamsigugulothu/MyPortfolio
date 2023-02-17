import React from "react";
import LoadImg from "../Images/pre.svg"
 
const Loader = (props) => {
    return <div className="" style={ props.load ? {
                position: "fixed",
                backgroundColor: "#0c0513",
                zIndex: 999999,
                width: "100%",
                height: "100vh",
            } : {display: "none"}
        } 
        >
            <div style={{
                top: "50%",
                left: "50%",
                height:"100%"
            }} className="justify-content-center d-flex align-items-center">
                <img style={{}} className="my-auto mx-auto" src={LoadImg} />
            </div>
        </div>;
}

export default Loader;

