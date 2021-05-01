import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import About from "./about.component";
import Home from "./home.component";
import Contact from "./contactus.component";
import Navbar from "./navbar";

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className="content">
            <switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Routes;
