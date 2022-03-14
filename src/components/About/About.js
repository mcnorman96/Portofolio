import React from "react";
import Portpic from '../images/picportofolio.jpg';

const About = () => {
  return (
    <div id="about" className="about">
        <div className="row">
          <div className="card">
            <h2>About me</h2>
            <div className="contactdiff">
              <div className="col-md-6">
                <p>Hello! <br/><br/>
                My name is Marcus Norman, and I'm a web developer. I'm a graduated student from Web-development Zealand Roskilde in January 2021 and before that I went to Multimediadesigner in Slagelse.
                  <br/><br/>
                  I’m a very driven person, and I love to learn and evolve my skills as well learning new technologies. My primary focus has been on learning JS frameworks. For the most part it has been React application. I have worked a lot with frontend development, so I’m really experienced with HTML, CSS, and JavaScript. But I have also worked quite a bit with the backend development. I've created API's with PHP in laravel and also with NodeJS. Furthermore I have worked a bit with JWT for making more secure applications. 
                  <br/><br/>
                  I’m a very positive person and is quite outgoing and I’m always up for a challenge. I find it exciting to tackle new problems and the process of learning by doing. I'm good at working in teams as well as working independently on an assignment. I can easily adjust myself into working in different workflows and get along well with new people.
                  </p>
              </div>
              <div className="col-md-6">
                <div className="aboutimg">
                  <img
                    className="img-responsive"
                    src={Portpic}
                    alt="profilepic"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;
