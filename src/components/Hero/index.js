import React, { Component } from 'react';
import Avatar from '../../assets/avatar.svg';
import './index.css';

export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <h1 className="title-hero">Front-end Developer &#38; Designer</h1>
        <p className="text-hero">
          I design and code beautifully simple things, and I love what I do.
        </p>
        <img src={Avatar} alt="My Avatar" />
      </div>
    );
  }
}
