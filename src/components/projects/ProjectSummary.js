import React from "react";
import Truncate from "react-truncate";
//import "firebase/storage";
import reactimg from "../images/react.svg";
import gatsbyimg from "../images/redux.svg";
import firebaseimg from "../images/firebase.svg";


const ProjectSummary = ({ project }) => {
  return (
    <div className="row">
      <div className="col-4">
        <h3 className="title">{project.name}</h3>
        <p>{project.excerpt}</p>
        <div href="#" className="projectlink">
          View Project
        </div>
        <div className="tech">
          <img src={reactimg} />
          <img src={gatsbyimg} />
          <img src={firebaseimg} />
        </div>
      </div>
      <div className="col-8">
        <div className="projectimgcontainer">
          <div className="projectimg">
            <img
              className="card-img-top"
              src={"/img/" + project.img}
              alt="NormanProjects"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
