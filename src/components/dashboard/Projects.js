import React, { useRef, useEffect, useState } from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";


const Projects = ({ projects }) => {
  
  const [FilteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=> {

    const filterProducts = () => {
      setFilteredProducts(projects);
      setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.order  - b.order)
        );
    }
    projects && filterProducts();

  }, [projects]);

  return (
    <div id="projects">
      <div className="row">
        <div className="col-sm-12">
          <div className="projects">
            <div className="title">
              <h2>Projects</h2>
            </div>
            <div className="projectcontainer section">
              {FilteredProducts?.map((project) => {
                  //var projectname = project.name.replace(/\s/g, '');
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
