import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { HashLink as Link } from 'react-router-hash-link';


const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Norman
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/#projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/#tech">Technologies</Link>
            </li>
            <li className="nav-item">
              <Link to="/#about">About</Link>
            </li>
            <li className="nav-item">
               <Link to="/#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
