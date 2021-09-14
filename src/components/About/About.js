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
                  I am Marcus Norman and I am a Developer. I am a graduated student from Web-development Zealand Roskilde in January 2021 and before that I went on Multimedia-design in Zealand Slagelse.
                  <br/><br/>
                  I am very passionate about what I do, and I am always willing to learn more and experience new things. I strive too always be better than what I was yesterday. I also take a lot of pride in the projects I create, and therefore also seek to make them as good as possible. Not only for me to be proud of but also for creating a good user experience for the customer. 
                  <br/><br/>
                  I am as a person very positive, committed, and flexible. I have a very solution-oriented mind and is always up for a challenge. Previously I have experienced that even though I was not always sure how to tackle the assignment. I have prevailed in the end and come up with solution. I am very flexible because I can adjust myself into different workflows, which also means that I am good at working individually and in groups. 
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
