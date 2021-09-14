import React, { useRef, useEffect } from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";


const Projects = ({ projects }) => {
  return (
    <div id="projects">
      <div className="row">
        <div className="col-sm-12">
          <div className="projects">
            <div className="title">
              <h2>Projects</h2>
            </div>
            <div className="projectcontainer section">
              {projects &&
                projects.map((project) => {
                  return (
                    <div key={project.id} className="single-project">
                      <div className="projectitem">
                        <Link to={"/projects/" + project.id} key={project.id}>
                          <ProjectSummary project={project} />
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        </div>
      </div>
      
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.development,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "development" }])
)(Projects);
