import React, { useRef, useEffect } from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";


const Projects = ({ projects }) => {
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

//export default Projects;

//Redux
//As the first argument passed in to connect,
//mapStateToProps is used for selecting the part of the data from the store that the connected component needs.
//It is called every time the store state changes.
//It receives the entire store state, and should return an object of data this component needs.
const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.development,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "development" }])
)(Projects);
