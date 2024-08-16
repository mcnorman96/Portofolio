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
                Hey there!
                <br /><br />
                I'm Marcus Norman, a software developer who's always eager to learn more. I've been working in the industry for about four years now, mostly focused on building fast front-end applications. Mostly been working with JavaScript and frameworks like React.js, Angular.js, Vue.js and Next.js.
                <br /><br />

                I graduated from Zealand Roskilde in 2021 with a degree in web development, and before that, I studied Multimedia Design in Slagelse. This mix has given me a solid background in both coding and design, plus some know-how in SEO.
                <br /><br />

                I'm a driven person who loves to keep learning and improving my skills every day, whether it's staying updated on industry news or playing around with the latest JavaScript framework.
                <br /><br />

                I always aim to keep a positive, can-do attitude and get along with all kinds of people. I enjoy taking on new challenges that helps me grow, and I'm comfortable working solo or as part of a team. What I really value is a work environment where communication flows freely, and everyone can share ideas and help each other get better.
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
