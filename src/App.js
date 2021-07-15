import React, { Component } from 'react';
import Header from './components/Header';
import RecentWork from './components/RecentWork';

import './App.css';

export default class App extends Component {
  render() {
    return(
      <>
        <Header />
        <RecentWork />
      </>
    );
  }
}