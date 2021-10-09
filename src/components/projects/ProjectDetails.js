import React, {useLayoutEffect} from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";  


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

    if (project.url) {
      if (project.type) {
        var url = <a href={project.url}>Link to Website</a>;
      } else {
        var url = <a href={project.url}>Link to Github</a>;
      }
    } else {
      var url = '';
    }

    if (project.description) {
      var description = project.description;
      description = description.replaceAll("\\n", "\n");
    }
  }
  
  if (project) {
    return (
      <div className="singlepage-project">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 m-auto">
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
            <div className="col-sm-8 m-auto">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">{project.name}</h2>
                  <p dangerouslySetInnerHTML={{__html:description}}></p>
                  <div className="projecturl">{url}</div>
                    <Slider {...settings} >
                        {sliderarr.map((sliderimg) => {
                          return (
                            <div className="slider">
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
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.development;
  const project = projects ? projects[id] : null
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
