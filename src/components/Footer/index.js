import React, { Component } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import logoWhite from '../../assets/logo-white.png';
import './index.css';

export default class Footer extends Component {
  styleIcons() {}
  render() {
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
            <IconContext.Provider
              value={{
                className: 'icon',
              }}
            >
              <div className="circle">
                <FaTwitter size={26} />
              </div>
            </IconContext.Provider>
          </a>
          <a
            className="social-links"
            href="https://www.linkedin.com/in/mateus-alencar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconContext.Provider
              value={{
                className: 'icon',
              }}
            >
              <div className="circle">
                <FaLinkedinIn size={26} />
              </div>
            </IconContext.Provider>
          </a>
          <a
            className="social-links"
            href="mailto:mtauws@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconContext.Provider
              value={{
                className: 'icon',
              }}
            >
              <div className="circle">
                <AiOutlineMail size={26} />
              </div>
            </IconContext.Provider>
          </a>
        </div>
        <div className="copyright">
          <p className="copyright-text">
            Handcrafted by me &copy; Based on{' '}
            <a className="copyright-link" href="https://mattfarley.ca/">
              Matt Farley
            </a>
          </p>
        </div>
      </div>
    );
  }
}
