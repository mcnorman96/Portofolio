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
import "./animation.scss";


const FadeInSection = ({
  children,
}) => {
  const domRef = React.useRef();
  
  const [isVisible, setVisible] = React.useState(false);
  let options = {
    threshold: 0.4
  }
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // In your case there's only one element to observe:     
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this:
        setVisible(true);
        
        // No need to keep observing:
        observer.unobserve(domRef.current);
      }
    }, options);
    
    observer.observe(domRef.current);
    
    return () => observer.unobserve(domRef.current);
  }, []);

  return (<section data-animation="fadeInUp" ref={ domRef } className={ isVisible ? ' animated fadeInUp' : '' }>{ children }</section>);
};

class Dashboard extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div>
        <div className="container">
          <Introduction />
          <FadeInSection>
            <ProjectList projects={projects} />
          </FadeInSection>
          <FadeInSection>
            <Skills />
          </FadeInSection>
          <FadeInSection>
            <About />
          </FadeInSection>
          
        </div>
        <FadeInSection>
          <Contact />
        </FadeInSection>
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
