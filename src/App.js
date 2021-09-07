import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import Contact from "./components/Contact/Contact";
import ProjectDetails from "./components/projects/ProjectDetails";
import About from "./components/dashboard/About";
import Projects from "./components/dashboard/Projects";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>

          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/projects/:id" component={ProjectDetails} />
            <Route path="/projects" component={Projects} />
            <Route path="/projectspage" component={Projects} />            
            <Route path="/about" component={About} />
            <Route path="/#contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
