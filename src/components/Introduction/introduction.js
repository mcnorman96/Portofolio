import React, { Component, useState, useEffect } from "react";
import arrow from "../images/website.json";
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
        <div className="col-12">
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
        <div className="col-4">
          <Lottie options={defaultOptions1} height={200} width={200} />
          <h3>Frameworks</h3>
          <p>Some text bla balb lalba blablab balbl ab lAALB AL A BA BA</p>
        </div>
        <div className="col-4">
          <Lottie options={defaultOptions} height={200} width={200} />
          <h3>Libraries</h3>
          <p>Some text bla balb lalba blablab balbl ab lAALB AL A BA BA</p>
        </div>
        <div className="col-4">
          <Lottie options={defaultOptions2} height={200} width={200} />
          <h3>CMS</h3>
          <p>Some text bla balb lalba blablab balbl ab lAALB AL A BA BA</p>
        </div>
      </div>
      </Zoom>
    </div>
  );
};

export default Introduction;
