import React from "react";
import Truncate from "react-truncate";
import "firebase/storage";

const ProjectSummary = ({ project }) => {
  return (
    <div className="row">
      <div className="col-4">
        <p className="shorttitle">Multimediadesign project</p>
        <h3 className="title">{project.title}</h3>
        <Truncate lines={3}>{project.content}</Truncate>
        <div className="tech">
        </div>
        <div href="#" className="projectlink">
          View Project
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
