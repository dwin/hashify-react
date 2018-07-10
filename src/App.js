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
        <div>
            <h1>hashify</h1>
            <ul className="header">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </div>

        </div>
        </HashRouter>
    );
  }
}

export default App;
