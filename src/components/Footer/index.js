import React, { Component } from 'react';
import logoWhite from '../../assets/logo-white.png';
import './index.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <img className="logo-white" src={logoWhite} alt="Logo of the site" />
        <p className="paragraph">
          Living, learning, &#38; leveling up <br /> one day at a time.
        </p>
      </div>
    );
  }
}
