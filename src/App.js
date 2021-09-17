import React, { Component } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import RecentWork from './components/RecentWork';
import Footer from './components/Footer';

import './App.css';
export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <About />
        <Skills />
        <RecentWork />
        <Footer />
      </>
    );
  }
}
