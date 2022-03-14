import React, {useLayoutEffect} from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";  

const FadeInSection = ({
  children,
}) => {
  const domRef = React.useRef();
  
  const [isVisible, setVisible] = React.useState(false);
  let options = {
    threshold: 0
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

  return (<section data-animation="fadeIn" ref={ domRef } className={ isVisible ? ' animated fadeIn' : '' }>{ children }</section>);
};

const ProjectDetails = (props) => {
  
  const { project } = props;

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  var settings = {  
    dots: false,  
    arrow: true,
    infinite: true,    
    slidesToShow: 1,  
    slidesToScroll: 1  
    };  

    var sliderarr = [];
    var techarr = [];

  if (project) {

    if (project.techfield) {
      var projecttech = project.techfield;
      projecttech = projecttech.replace(/\s+/g, '');
      var techarr = projecttech.split(',');
    }

    if (project.sliderfield) {
      var projectslider = project.sliderfield;
      projectslider = projectslider.replace(/\s+/g, '');
      var sliderarr = projectslider.split(',');
    }

    if (project.type) {
      var type = project.type;
    } else {
      var type = <p>Development Project</p>;
    }

    if (project.description) {
      var description = project.description;
      description = description.replaceAll("\\n", "\n");
    }
  }
  
  if (project) {
    return (
      <FadeInSection>
      <div className="singlepage-project">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <div className="card">
                <img className="card-img-top" src={"/img/" + project.img} alt="projectimg" />
              </div>
              <div className="type">{type}</div>
              <div className="tech">
              {techarr.map((tech) => {
                  return (
                    <img key={tech} className="tech" src={"/img/" + tech} alt="technology" />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 m-auto">
              <div className="projecttextcontainer">
                <div className="card">
                  <div className="card-body">
                    <h1 className="card-title">{project.name}</h1>
                    <p dangerouslySetInnerHTML={{__html:description}}></p>
                    {project.url &&
                      <div className="projecturl"><a target="_blank" href={project.url}>Link to Website</a> </div>
                    }
                    {project.githuburl &&
                      <div className="projecturl"><a target="_blank" href={project.githuburl}>Link to Github</a> </div>
                    }
                      <Slider {...settings} >
                          {sliderarr.map((sliderimg) => {
                            return (
                              <div className="slider" key={sliderimg}>
                                <img key={sliderimg} className="sliderimg" src={"/img/" + sliderimg} alt="technology" />                          
                              </div>
                            );
                          })}
                      </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </FadeInSection>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
 // console.log(state, ownProps);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.development;
  const project = projects ? projects[id] : null;

  return {
    project: project,
  }
}

export default compose(
  connect(mapStateToProps), 
  firestoreConnect([{
    collection: 'development'
  }])
)(ProjectDetails)
