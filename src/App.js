import React from 'react';
// import logo from './logo.svg';
// import Header from './components/Header'
import './App.css';
import './components/Header.css'
import logo from './assets/images/site/favicon.ico';

import Home from './components/Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
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
              <ul className="Navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/portfolio">Home</Link></li>
                <li><Link to="/aboutme">Home</Link></li>
              </ul>
            </header>
          </div>
          <Route path="/" exact component={Home} />
        </div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav> */}
        {/* <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} /> */}
      </div>

    </Router>
  );
}

export default App;
