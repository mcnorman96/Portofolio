import React, { useRef, useEffect } from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  return (
    <div className="section2">
      <div className="title">
        <h2>Projects</h2>
      </div>
      <div className="project-list section">
        {projects &&
          projects.map((project) => {
            return (
              <div key={project.id} className="singleproject">
                <div className="projectitem">
                  <Link to={"/project/" + project.id} key={project.id}>
                    <ProjectSummary project={project} />
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProjectList;
