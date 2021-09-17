import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import RecentWork from './components/RecentWork';
import Footer from './components/Footer';

import './App.css';
export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <About />
        <RecentWork />
        <Footer />
      </>
    );
  }
}
