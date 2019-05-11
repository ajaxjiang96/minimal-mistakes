import React from 'react';
import './RecentPosts.css';
import RecentPost from './RecentPost';

function RecentPosts() {
  return (
    <div className="RecentPosts">
      <h1>
        RecentPosts
      </h1>
      <hr></hr>
      <RecentPost></RecentPost>
      <RecentPost></RecentPost>
    </div>
  );
}

export default RecentPosts;
