import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { HashLink as Link } from 'react-router-hash-link';


const Navbar = (props) => {
  return (
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="/">Norman</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link" to="/#projects">Projects</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/#tech">Technologies</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/#about">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/#contact">Contact</Link>
          </li>
        </ul>
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
