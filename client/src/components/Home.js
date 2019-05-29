import React from 'react';
// import logo from './logo.svg';
// import Header from './components/Header'
// import './Home.css';
// import './components/Header.css'

import MainProfile from './MainProfile';
import RecentPosts from './RecentPosts';


function Home({ match }) {
  console.log("match", match);
  return (
    <div className="Home">

      <MainProfile/>
      <RecentPosts {...match}/>
      <div className="Footer">
        <hr/>
        <div className="Copyright">
          &copy; Jiacheng Jiang 2019
          </div>
      </div>

    </div>
  );
}

export default Home;
