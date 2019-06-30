import React from 'react';
// import logo from './logo.svg';
// import Header from './components/Header'
import './RecentFeed.css';
// import './components/Header.css'

// import MainProfile from './MainProfile';
import RecentPosts from './RecentPosts';


function Home({ match }) {
  console.log("match", match);
  return (
    <div className="Home">

      {/* <MainProfile></MainProfile> */}
      <RecentPosts {...match}/>
      

    </div>
  );
}

export default Home;
