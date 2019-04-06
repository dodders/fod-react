import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Counter from './components/Counter';

class App extends Component {

  render() {
    return (
        <div>
          <Body />
        </div>
      );
  }
}

export default App;
