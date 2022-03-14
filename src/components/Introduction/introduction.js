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
            <span>Frontend developer</span>
            <br /> 
            Marcus<span> Norman</span>
          </h1>
        </div>
      </div>
      </Zoom>
      <Zoom delay={1200} duration={2000}>
      <div className="row">
        <div className="col-md-4">
          <Lottie options={defaultOptions1} height={200} width={200} />
          <h3>Passionate</h3>
          <p>Always trying to find ways to improve my knowledge and skills as well as discovering new technologies to learn.</p>
        </div>
        <div className="col-md-4">
          <Lottie options={defaultOptions} height={200} width={200} />
          <h3>Solution oriented</h3>
          <p>Problem solving is big part of web-development. I'm always searching and comparing to find the best solution.</p>
        </div>
        <div className="col-md-4">
          <Lottie options={defaultOptions2} height={200} width={200} />
          <h3>Adjustable</h3>
          <p>I'm great at adjusting myself into different workflows and taking on the role I've been given.</p>
        </div>
      </div>
      </Zoom>
    </div>
  );
};

export default Introduction;
