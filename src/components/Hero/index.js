import React, { Component } from 'react';
import Avatar from '../../assets/avatar.svg';
import HeroPc from '../../assets/hero-pc.svg';
import './index.css';

export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <h1 className="title-hero">Front-end Developer &#38; Designer</h1>
        <p className="text-hero">
          I design and code beautifully simple things, and I love what I do.
        </p>
        <div className="images">
          <img className="avatar" src={Avatar} alt="My Avatar" />
          <img className="hero-pc" src={HeroPc} alt="My Pc" />
        </div>
      </div>
    );
  }
}
