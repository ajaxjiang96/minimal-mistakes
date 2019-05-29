import React from 'react';
import logo from '../assets/images/site/favicon.ico';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <header className="App-header">
        <div className="App-title">
          <img src={logo} className="App-logo" alt="logo" />
          {/* Jiacheng Jiang */}
        </div>
        <ul className="nav-bar">
          <li><a href="default.asp">Home</a></li>
          <li><a href="news.asp">Portfolio</a></li>
          <li><a href="contact.asp">About Me</a></li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
