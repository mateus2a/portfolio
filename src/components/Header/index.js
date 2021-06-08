import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import './index.css';

export default class Header extends Component {
  render() { 
    return (
      <header className="header">
        <img className="logo" src={logo} alt="Logo of the site" />
        <nav className="navbar">
          <a href="github.com" className="link">My Projects</a>
          <button className="btn btn-hello">Say Hello</button>
        </nav>
      </header>
    );
  }
}
