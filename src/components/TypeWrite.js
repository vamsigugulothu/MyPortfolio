import React from "react";
import Typewriter from "typewriter-effect";

const TypeWrite = () => {
    return (
    <Typewriter
      options={{
        strings: [
          "React js Developer",
          "MERN Stack Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    );
}

export default TypeWrite;