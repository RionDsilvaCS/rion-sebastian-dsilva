import React from "react";
import "./Experience.css";
import proglint_logo from "../../assets/exp/proglint_logo.svg";
import variant_logo from "../../assets/exp/variant_logo.svg";
import digitalfortress_logo from "../../assets/exp/digitalfortress_logo.svg";
export function Experience() {
  return (
    <div className="gen-body" id="experience">
      <p className="title">Experience</p>
      <div className="box-sec">
        <div className="proglint-box">
          <a href="https://www.proglint.com/" target="_blank">
            <img src={proglint_logo} />
          </a>
          <div>
            <h3>Machine Learning Engineer | Proglint Software Solutions </h3>{" "}
            <p> Oct 2023 - June 2024 </p>
            <br />
            <p>
              Leveraging machine learning expertise to create innovative
              solutions for the retail sector
              <br />
              • Developed real-time shoplifting detection system.
              <br />
              • Built AI-powered cart tracking system.
              <br />
              <br />
              Track customer movements and product interactions within the
              store. Implemented dynamic virtual cart functionality, adding and
              removing items based on customer actions.
              <br />
              • Conducted research and experimentation with various
              architectures to optimize model performance and address specific
              retail challenges.
              <br />
              • Maintained proficiency in PyTorch, YOLOv8, Django, and other
              relevant technologies.
              <br />
            </p>
          </div>
        </div>
        <div>
          <div className="digi-side-box ">
            <img src={digitalfortress_logo} />
            <h3>UI/UX Designer | DigitalFortress Private Limited</h3>
            <p>July - Nov 2023 | Worked on the product - Mukham</p>
            <p>
              - Mukham is already been into use on small scale and now we are
              working on the user feedback. Redesigning the software for co
              operate world.
            </p>
          </div>
          <div className="var-side-box">
            <img src={variant_logo} />
            <h3>Android Developer | Variant Labs</h3>
            <p>
              April - July 2023 | Worked on Fitness application project - INFITS
            </p>
            <p>
              • Frontend development using XML & Java.
              <br />
              • Backend development in php. Also, maintaining GitHub repo for
              merges & branching.
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
