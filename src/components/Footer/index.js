import React, { Component } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import logoWhite from '../../assets/logo-white.png';
import './index.css';

export default class Footer extends Component {
  render() {
    const style = { backgroundColor: '#7510f7', color: 'white' };

    return (
      <div className="footer">
        <img className="logo-white" src={logoWhite} alt="Logo of the site" />
        <p className="paragraph">
          Living, learning, &#38; leveling up <br /> one day at a time.
        </p>
        <div className="social">
          <a
            className="social-links"
            href="https://twitter.com/mateusalendev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="circle">
              <FaTwitter size={26} style={style} />
            </div>
          </a>
          <a
            className="social-links"
            href="https://www.linkedin.com/in/mateus-alencar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="circle">
              <FaLinkedinIn size={26} style={style} />
            </div>
          </a>
          <a
            className="social-links"
            href="mailto:mtauws@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="circle">
              <AiOutlineMail size={26} style={style} />
            </div>
          </a>
        </div>
        <div className="copyright">
          Handcrafted by me &copy; Based on{' '}
          <a href="https://mattfarley.ca/">Matt Farley</a>
        </div>
      </div>
    );
  }
}
