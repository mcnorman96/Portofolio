import React, { useState, useEffect, Component } from "react";

const Stars = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <>      
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>

    </>
  );
};

export default Stars;


// <div className="bubble bubble--1"></div>
// <div className="bubble bubble--2"></div>
// <div className="bubble bubble--3"></div>
// <div className="bubble bubble--4"></div>
// <div className="bubble bubble--5"></div>
// <div className="bubble bubble--6"></div>
// <div className="bubble bubble--7"></div>
// <div className="bubble bubble--8"></div>
// <div className="bubble bubble--9"></div>
// <div className="bubble bubble--10"></div>
// <div className="bubble bubble--11"></div>
// <div className="bubble bubble--12"></div>