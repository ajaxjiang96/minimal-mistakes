import React from 'react';
// import logo from '../assets/images/site/favicon.ico';
import './Article.css';
const ReactMarkdown = require('react-markdown')

function Article(input) {
  return (
    <div className="Article">
      <ReactMarkdown source={input} />
    </div>
  );
}

export default Article;
