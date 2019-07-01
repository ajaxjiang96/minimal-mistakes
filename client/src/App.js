import React from 'react';
// import logo from './logo.svg';
// import Header from './components/Header'
import './App.css';
import './components/Header.css'
import logo from './assets/images/site/logo-white.png';
import sideFace from './assets/images/site/sideface.png';

import RecentFeed from './components/RecentFeed';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import sampleMD from './assets/markdown/sample.md'
// import ExpandButton from './components/ExpandButton';
import Portfolio from './components/Portfolio/Portfolio';
import './components/ExpandButton.css'
import MainProfile from './components/MainProfile';

class App extends React.Component {

  constructor(props) {
    super(props);
    this._expandRightArea = this._expandRightArea.bind(this);
    this._forceExpandRightArea = this._forceExpandRightArea.bind(this);
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

  _forceExpandRightArea() {
    this.setState({
      expanded: true
    })
  }


  render() {
    return (
      <div className="App">
        <div className="Header">

          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
        <div className={`App-left ${this.state.expanded ? "" : "active"}`}>
          <div className="HugeTitle">
            Jiacheng<br />
            Jiang
          </div>
          <img src={sideFace} className="side-face" alt="side face sketch art" />
        </div>
        <div className={`App-right ${this.state.expanded ? "active" : ""}`}>
          <Router>
            {/* <ExpandButton defaultOnClick={this._expandRightArea} /> */}
            <div className="nav-bar">
              <div className="left">
                <NavLink to="/" activeClassName='is-active' exact>Home</NavLink>
                {/* <NavLink to="/portfolio" activeClassName='is-active' onClick={this._forceExpandRightArea}>Portfolio</NavLink> */}
                <NavLink to="/about" activeClassName='is-active'>About</NavLink>
              </div>
              <div className="right">
                <a onClick={this._expandRightArea}>
                  {this.state.expanded ?
                    <div className="collapse"><i className="fas fa-compress" /></div>
                    : <div className="expand"><i className="fas fa-expand" /></div>
                  }
                </a>
              </div>

            </div>
            <Route path="/" exact component={RecentFeed} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/about" component={MainProfile} />
          </Router>
          <div className="Footer">
            {/* <hr /> */}
            <div className="Copyright">
              &copy; Jiacheng Jiang 2019
          </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
