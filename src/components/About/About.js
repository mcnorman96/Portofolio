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
              <p>
                Hi there!
                <br /><br />
                I am Marcus Norman. A frontend developer always looking for more ways to improve. I have been a big fan of JavaScript and been very fond of developing application in React.js as well as using the frameworks like Next.js for some websites as well.
                <br /><br />
                I am a graduated student from web-development Zealand Roskilde back in 2021 and before that I took Multimediadesigner in Slagelse. So I both have some knowledge of SEO as well as design patterns for making an UI.
                <br /><br />
                I’m a very driven person, and I love to learn and evolve my skills as well learning new technologies. As I mentioned before my primary focus has been on developing in React.js, but I also have taking some time to both learn a bit of Node.js, PHP and use most of the used css frameworks like Tailwind, Bootstrap and foundatian
                <br /><br />
                As a person I'm usually really positive and tend to get along with all kinds of people. I like when I get a bit challenged in my everyday life. So I like when I get handed things that are new for me, so I can spend some time. I'm good at working in teams as well as working independently on an assignments, but I do love a work environment where there is open communication and people can share there thought and opionions so we can help eachother to get better.
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
