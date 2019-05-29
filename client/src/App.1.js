import React from 'react';
// import logo from './logo.svg';
// import Header from './components/Header'
import './App.css';
import './components/Header.css'
import logo from './assets/images/site/favicon.ico';

import Home from './components/Home';
import Article from './components/Article';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import sampleMD from './assets/markdown/sample.md'
import Dashboard from './components/Dashboard';


class App extends React.Component {
  componentDidMount() {
    console.log(sampleMD)
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

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-left">
            <div className="Header">

              <header className="App-header">
                <div className="App-title">
                  <img src={logo} className="App-logo" alt="logo" />
                  {/* Jiacheng Jiang */}
                </div>
                <ul className="nav-bar">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/portfolio">Portfolio</Link></li>
                  <li><Link to="/aboutme">About Me</Link></li>
                  <li><Link to="/admin">Manage</Link></li>

                </ul>
              </header>
            </div>
            <Route path="/" exact component={Home} />
            <Route path="/admin" exact component={Dashboard} />
          </div>
          <div className="App-right active">
            {this.state && this.state.text ? Article(this.state.text) : ""}
          </div>
        </div>

      </Router>
    );
  }
}

// function App() {



// }

export default App;
