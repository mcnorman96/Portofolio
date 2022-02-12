import React, { Component, useState, useEffect } from "react";
import arrow from "../images/webdesign.json";
import settings from "../images/settings.json";
import code from "../images/htmlcode.json";
import bulb from "../images/bulb.json";
import Lottie from "react-lottie";
import Zoom from 'react-reveal/Zoom';


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: bulb,
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
          <h3>Passionate</h3>
          <p>I’m always trying to evolve my knowledge and skills. I never want to feel like I’m not improving.</p>
        </div>
        <div className="col-md-4">
          <Lottie options={defaultOptions} height={200} width={200} />
          <h3>Solution oriented</h3>
          <p>Problem solving is big part web development. Finding the best solution is  the key</p>
        </div>
        <div className="col-md-4">
          <Lottie options={defaultOptions2} height={200} width={200} />
          <h3>Flexible</h3>
          <p>Going the extra length to get the job done. I'm able to adjust myself to fit into different workflows.</p>
        </div>
      </div>
      </Zoom>
    </div>
  );
};

export default Introduction;
