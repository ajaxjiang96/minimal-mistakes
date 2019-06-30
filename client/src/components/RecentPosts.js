import React from 'react';
import './RecentPosts.css';
import RecentPost from './RecentPost';
import Article from './Article';

function RecentPosts() {
    return (
        <div className="RecentPosts">
            <div className="PostList">
                <RecentPost />
                <RecentPost />
                <RecentPost />
                <RecentPost />
                <RecentPost />
                <RecentPost />
                <RecentPost />
            </div>
            <div className="ArticleContainer">
                <Article></Article>
            </div>
        </div>
    );
}

export default RecentPosts;
