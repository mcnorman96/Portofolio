import React, { Component, useState, useEffect } from "react";
import arrow from "../images/webdesign.json";
import settings from "../images/settings.json";
import code from "../images/htmlcode.json";
import Lottie from "react-lottie";
import Zoom from 'react-reveal/Zoom';


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: arrow,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: code,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: settings,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Introduction = () => {

  return (
    <div className="section1">
      <Zoom delay={1000} >
      <div  className="icon1">
        <div ></div>
      </div>
      <div  className="icon2">
        <div ></div>
      </div>
      <div  className="icon3">
        <div ></div>
      </div>
      </Zoom>
      <Zoom delay={200} duration={1000}>
      <div className="row">
        <div className="col-sm-12">
          <h1>
            <span>Web Developer</span>
            <br />
            with a <span>passion</span>
          </h1>
        </div>
      </div>
      </Zoom>
      <Zoom delay={1200} duration={2000}>
      <div className="row">
        <div className="col-md-4">
          <Lottie options={defaultOptions1} height={200} width={200} />
          <h3>Frontend developer</h3>
          <p>My biggest passion is to code. I am always trying to evolve my knowledge and skills</p>
        </div>
        <div className="col-md-4">
          <Lottie options={defaultOptions} height={200} width={200} />
          <h3>User Experience</h3>
          <p>I always strive to make the user experience in my webistes as good as possible</p>
        </div>
        <div className="col-md-4">
          <Lottie options={defaultOptions2} height={200} width={200} />
          <h3>Frameworks</h3>
          <p>The use of frameworks is often used to create my projects to make the development more stuctured</p>
        </div>
      </div>
      </Zoom>
    </div>
  );
};

export default Introduction;
