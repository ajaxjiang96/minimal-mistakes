import React from 'react';
import logo from '../assets/images/site/favicon.ico';

// import './Header.css';

function Dashboard() {
    return (
        <div className="dashboard">
            <i className="fa fa-plus"/>
            <div className="Editor">
                <textarea name="md-editor" id="md-editor" cols="30" rows="10"/>
            </div>
            <div className="article-list">
                <h1>
                    Articles
                </h1>
            </div>
        </div>
    );
}

export default Dashboard;
