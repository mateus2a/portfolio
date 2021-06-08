import React, { Component } from 'react';
import logo from '../../assets/logo.png';

export default class Header extends Component {
  render() { 
    return (
      <header className="header">
        <img src={logo} alt="Logo of the site" />
        <nav className="navbar">
          <a className="link" href="#">My Projects</a>
          <button className="btn btn-hello">Say Hello</button>
        </nav>
      </header>
    );
  }
}
