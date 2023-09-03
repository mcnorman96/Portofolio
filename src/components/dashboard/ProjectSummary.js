import React from "react";
import "firebase/storage";

const ProjectSummary = ({ project }) => {
  let techarr = [];

  if (project && project.techfield) {
      let projecttech = project.techfield;
      projecttech = projecttech.replace(/\s+/g, '');
      techarr = projecttech.split(',');
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