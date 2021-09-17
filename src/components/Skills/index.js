import React, { Component } from 'react';
import Designer from '../../assets/designer.svg';
import FrontEnd from '../../assets/frontend.svg';
import './index.css';

export default class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <div className="skill">
          <img classname="img-skill" src={Designer} alt="Designer Logo" />
          <h3 className="title-skill">Designer</h3>
          <p className="subtitle">
            I value simple content structure, clean design patterns, and
            thoughtful interactions.
          </p>
          <div className="section-two">
            <h4 className="title-two">Things I enjoy designing:</h4>
            <p className="text-two">UX, UI, Web, Mobile, Apps</p>
          </div>

          <div className="section-three">
            <h4 className="title-three">Dev Tools</h4>
            <ul>
              <li>Balsamiq Mockups</li>
              <li>Figma</li>
              <li>Marvel</li>
            </ul>
          </div>
        </div>
        <div className="skill">
          <img classname="img-skill" src={FrontEnd} alt="Designer Logo" />
          <h3 className="title-skill">Front-end Developer</h3>
          <p className="subtitle">
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>
          <div className="section-two">
            <h4 className="title-two">Languages I speak:</h4>
            <p className="text-two">HTML, CSS, Sass, Less, JavaScript</p>
          </div>

          <div className="section-three">
            <h4 className="title-three">Dev Tools</h4>
            <ul>
              <li>Visual Studio Code</li>
              <li>Bootstrap</li>
              <li>Terminal</li>
              <li>Github</li>
              <li>Gitlab</li>
              <li>TailWind</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
