import "./intro.scss";
import React from "react";
import { BiDownArrowAlt } from "react-icons/bi";
import Typewriter from "typewriter-effect";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/man.png" alt="" className="myImg" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There,</h2>
          <h1>Yash Panchiwala</h1>
          <div className="oneLine">
            <h3>Web Developer </h3>
            <h3 className="typeWriter">
              <Typewriter
                options={{
                  strings: ["React js", "Node js", "C++", "Java", "Pyhton"],
                  autoStart: true,
                  delay: 75,
                  loop: true,
                }}
              />
            </h3>
          </div>
        </div>
        <a href="#portfolio">
          <BiDownArrowAlt className="downArrow" style={{ color: "white" }} />
        </a>
      </div>
    </div>
  );
}
