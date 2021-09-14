import React, { Component } from "react";
import ProjectList from "./Projects";
import Introduction from "../Introduction/introduction";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import "./style.scss";
import "./responsive.scss";


class Dashboard extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div>
        <div className="container">
          <Introduction />
          <ProjectList projects={projects} />
          <Skills />
          <About />
        </div>
          <Contact />
      </div>
    );
  }
}

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
)(Dashboard);
