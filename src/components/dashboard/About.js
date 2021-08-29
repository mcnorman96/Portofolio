import React from "react";

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card">
            <h1>About Movietime</h1>
            <div className="contactdiff">
              <div className="col-sm-6">
                <p>
                  My name is Connor and Movietime is my place to share my love
                  for movies with all of you, but it is also for myself so i can
                  remember all the different kinds of movies and remember
                  exactly what I felt when I saw the different movies. <br />
                  <br />I am a former actor so i know a lot about how good
                  structured and hard the industry can be, and therefore i also
                  have a lot of understanding towards movies and series.
                </p>
              </div>
              <div className="col-sm-6">
                <div className="aboutimg">
                  <img
                    className="img-fluid"
                    src="/img/connor.jpg"
                    alt="profilepic"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
