import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import getFodMaps from './data/foods';

class App extends Component {

  constructor(props) {
    super(props)
    const fods = getFodMaps();
    this.state = {
        fodmaps: fods,
        search: ''
    }
  }

  doSearch(txt) {
    this.setState({
      fodmaps: this.state.fodmaps,
      search: txt
    });
  }

  render() {
    return (
        <div>
          <Header fodmaps={this.state.fodmaps} />
          <Body fodmaps={this.state.fodmaps} search={this.state.search} />
          <Footer />
        </div>
      );
  }
}

export default App;
