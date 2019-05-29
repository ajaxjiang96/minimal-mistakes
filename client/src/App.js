import React from 'react';
// import logo from './logo.svg';
// import Header from './components/Header'
import './App.css';
import './components/Header.css'
import logo from './assets/images/site/logo-white.png';
import sideFace from './assets/images/site/sideface.png';

import RecentFeed from './components/RecentFeed';
import { BrowserRouter as Router, Route } from "react-router-dom";
import sampleMD from './assets/markdown/sample.md'
import ExpandButton from './components/ExpandButton';
import Portfolio from './components/Portfolio/Portfolio';


class App extends React.Component {

  constructor(props) {
    super(props);
    this._expandRightArea = this._expandRightArea.bind(this);
  }
  componentWillMount() {
    this.setState({
      expanded: false
    })
  }

  componentDidMount() {
    fetch(sampleMD)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({
          text: text
        }, () => {
          console.log(this.state)
        })
      })
  }

  _expandRightArea() {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {
      return (
          <div className="App">
              <div className="Header">

                  <header className="App-header">
                      <img src={logo} className="App-logo" alt="logo"/>
                  </header>
              </div>
              <div className={`App-left ${this.state.expanded ? "" : "active"}`}>
                  <div className="HugeTitle">
                      Jiacheng
                      <br/>
                      Jiang
                  </div>
                  <img src={sideFace} className="side-face" alt="side face sketch art"/>
              </div>
              <div className={`App-right ${this.state.expanded ? "active" : ""}`}>
                  <Router>
                      <ExpandButton defaultOnClick={this._expandRightArea}/>
                      <Route path="/" exact component={RecentFeed}/>
                      <Route path="/portfolio" component={Portfolio}/>
                  </Router>
              </div>
          </div>

      );
  }
}

export default App;
