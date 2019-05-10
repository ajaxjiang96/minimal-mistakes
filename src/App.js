import React from 'react';
// import logo from './logo.svg';
// import Header from './components/Header'
import './App.css';
import './components/Header.css'
import logo from './assets/images/site/favicon.ico';
import MainProfile from './components/MainProfile';


function App() {
  return (
    <div className="App">
      <div className="App-left">
        <div className="Header">
          <header className="App-header">
            <div className="App-title">
              <img src={logo} className="App-logo" alt="logo" />
              {/* Jiacheng Jiang */}
            </div>
            <ul className="Navbar">
              <li><a href="default.asp">Home</a></li>
              <li><a href="news.asp">Portfolio</a></li>
              <li><a href="contact.asp">About Me</a></li>
            </ul>
          </header>
        </div>
        <MainProfile></MainProfile>
      </div>

    </div>
  );
}

export default App;
