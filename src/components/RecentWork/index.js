import React, { Component } from 'react';
import './styles.css';

export default class Header extends Component {
  render() { 
    return (
      <section className="container">
        <h2>My Recent Work</h2>
        <span>Here are a few design projects I've worked on recently. Want to see more? 
          <a href="#" className="email-me">
            Email me.
          </a>
        </span>
        <div className="projects">
          <div className="project-wrapper"></div>
          <div className="project-wrapper"></div>
          <div className="project-wrapper"></div>
          <div className="project-wrapper"></div>
          <div className="project-wrapper"></div>
          <div className="project-wrapper"></div>
        </div>
      </section>
    );
  }
}