import React from "react";

const About = () => {
  return (
    <div id="tech" className="skills">
        <div className="row">
          <div className="col-lg-4">
            <h3>The technologies I have learned</h3>
          </div>
          <div className="col-lg-8">
            <ul>
              <li><div>React.js<img src="/img/react.svg"></img></div></li>
              <li><div>Gatsby.js<img src="/img/gatsby.svg"></img></div></li>
            </ul>
            <ul>
              <li><div>Node.js<img src="/img/nodejs.png"></img></div></li>
              <li><div>Laravel<img src="/img/laravel.png"></img></div></li>
            </ul>
            <ul>
              <li><div>Firebase<img src="/img/firebase.svg"></img></div></li>
              <li><div>MySQL<img src="/img/mysql-logo.svg"></img></div></li>
            </ul>
            <ul>
              <li><div>Git/Github<img src="/img/Git.svg"></img></div></li>
              <li><div>Wordpress<img src="/img/wordpress.svg"></img></div></li>
            </ul>
            <ul>
               <li><div>Redux<img src="/img/redux.svg"></img></div></li>
            </ul>
            <ul>
              <li><div>Foundation<img src="/img/foundation.svg"></img></div></li>
            </ul>
            <ul>
            <li><div>Bootstrap<img src="/img/bootstrap.png"></img></div></li>
            </ul>
          </div>
        </div>
    </div>
  );
};

export default About;
