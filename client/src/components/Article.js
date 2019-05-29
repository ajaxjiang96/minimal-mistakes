import React from 'react';
// import logo from '../assets/images/site/favicon.ico';
import './Article.css';

const ReactMarkdown = require('react-markdown')

function Article(input) {
    return (
        <div className="Article">
            <div className="Head">
                <div className="closeButton">
                    <i className="fa fa-times"/>
                </div>

                <h1> One Calendar</h1>
                <div className="Info">
                    <div className="Date">2017 / 05 / 09</div>
                    |
                    <div className="Author">Jiacheng Jiang</div>
                </div>
                <hr/>
            </div>
            <ReactMarkdown source={input}/>
        </div>
    );
}

export default Article;
