import React from "react";
import Truncate from "react-truncate";
import "firebase/storage";
import reactimg from "../images/react.svg";
import gatsbyimg from "../images/redux.svg";
import firebaseimg from "../images/firebase.svg";
import Slide from 'react-reveal/Slide';


const ProjectSummary = ({ project }) => {
  console.log(project);

  var techarr = [];

  if (project) {

    if (project.techfield) {
      var projecttech = project.techfield;
      projecttech = projecttech.replace(/\s+/g, '');
      var techarr = projecttech.split(',');
    } 
  }
  return (
    <div>
        <div className="projectimgcontainer">
            <div className="projectimg">
              <img
                className="card-img-top"
                src={"/img/" + project.img}
                alt="NormanProjects"
              />
              <div className="bg"></div>
              
              <div className="projecthover">
             
                <div className="projectname">
                  <h3>{project.name}</h3>
                </div>
              
                <div className="projectlink">
                  Go to project
                </div>
                <div className="projecticons">
                {techarr.map((tech) => {
                  return (
                    <img key={tech} src={"/img/" + tech} alt="technology" />
                  );
                })}
                </div>
              </div>
            </div>
        </div>
    </div>
  );
};

export default ProjectSummary;