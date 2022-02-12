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
                My name is Marcus Norman, and I am a Developer. I am a graduated student from Web-development Zealand Roskilde in January 2021 and before that I took Multimediadesigner in Slagelse.
                  <br/><br/>
                  I’m a very driven person, and love to learn and evolve my skills and knowledge. My primary focus is React.js and Laravel. I have worked a lot with frontend development, so I’m really experienced with HTML, CSS, and JavaScript. At my current Job I have also touched a lot of work with the backend development. For an example I have worked with creating plugins for CMS systems as well as creating different APIs to call on the frontend off another website. 
                  <br/><br/>
                  I’m a very positive person and is quite outgoing. I’m always up for a challenge so even though I may not be sure how to tackle a problem, I will do the work to find the solution. Working individually or in groups is quite easy for me. I’m very good at being independent but also very fond of working together with other people because it’s fun to spare information with other people. 
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
