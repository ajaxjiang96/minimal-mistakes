import React from 'react';
import './App.css';
import './NavBar.css';
import './Header.css'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Portfolio from './components/Portfolio/Portfolio';
import MainProfile from './components/MainProfile';
// import { TransitionGroup, CSSTransition } from "react-transition-group";
import RecentPosts from './components/RecentPosts';
import MyEditor from './components/Editor/Editor';

import logo from './assets/images/site/logo-white.png';
import sideFace from './assets/images/site/sideface.png';
import homeIcon from './assets/icons/list.svg';
import portIcon from './assets/icons/folder.svg';
import meIcon from './assets/icons/me.svg';

type AppState = {
  expanded: boolean
}

class App extends React.Component<{}, AppState> {

  constructor(props: Readonly<{}>) {
    super(props);
    this._expandRightArea = this._expandRightArea.bind(this);
    this._forceExpandRightArea = this._forceExpandRightArea.bind(this);
  }
  componentWillMount(): void {
    this.setState({
      expanded: false
    })
  }

  _expandRightArea(): void {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  _forceExpandRightArea(): void {
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
                <NavLink to="/" activeClassName='is-active' className="nav-link" exact> <img src={homeIcon} className="my-icon"/></NavLink>
                <NavLink to="/portfolio" activeClassName='is-active' onClick={this._forceExpandRightArea}> <img src={portIcon} className="my-icon"/></NavLink>
                <NavLink to="/about" activeClassName='is-active'> <img src={meIcon} className="my-icon"/></NavLink>
              </div>
              <div className="right">
                <div className="expand-button" onClick={this._expandRightArea}>
                  {this.state.expanded ?
                    <div className="collapse"><i className="fas fa-compress" /></div>
                    : <div className="expand"><i className="fas fa-expand" /></div>
                  }
                </div>
              </div>

            </div>
            <Route path="/"
              exact render={(routeProps) => (
                <RecentPosts {...routeProps} expandFunction={this._forceExpandRightArea} expanded={this.state.expanded} />
              )}/>
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/about" component={MainProfile} />
            <Route path="/edit/:post?" component={({ match }: {match: any}) => <MyEditor postId={match.params.post}/>} />
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
