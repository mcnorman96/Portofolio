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
    dots: true,  
    infinite: true,  
    speed: 500,  
    centerMode: true,  
    slidesToShow: 1,  
    slidesToScroll: 1  
    };  

  const technologies = []; 
  const sliderimages = [];
  if (project) {
    if (project.tech) {
      project.tech.forEach(element => {
        technologies.push(element.img);   
      } )
    }
    if (project.tech) {
      project.slider.forEach(element => {
        sliderimages.push(element.img);   
      } )
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

              <div className="tech">
              {technologies.map((tech) => {
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
                  <p>{project.description}</p>
                  <Slider {...settings} >
                    <div className="slider">
                      {sliderimages.map((sliderimg) => {
                        return (
                            <img key={sliderimg} className="sliderimg" src={"/img/" + sliderimg} alt="technology" />                          
                        );
                      })}
                    </div>
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
