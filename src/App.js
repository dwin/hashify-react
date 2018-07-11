import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import About from "./About";

class App extends Component {
  render () {
    return (
        <HashRouter>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">hashify</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

              <div className="navbar-nav mr-auto">
                  <NavLink className="nav-item nav-link" exact to="/">Home</NavLink>
                  <NavLink className="nav-item nav-link" to="/about">About</NavLink>
              </div>


          </nav>
          <div className="content row">
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}

export default App;
