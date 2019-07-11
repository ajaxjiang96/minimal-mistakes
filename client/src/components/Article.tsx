import React from 'react';
// import logo from '../assets/images/site/favicon.ico';
import './Article.css';
import * as defaultArticle from '../assets/markdown/sample.md';
import ReactMarkdown from 'react-markdown';
import { ArticleProps, ArticleState } from './models/posts';
class Article extends React.Component<ArticleProps, ArticleState> {
  componentWillMount() {
    this.setState({
      text: "Loading"
    })
  }

  componentDidMount() {
    // console.log(defaultArticle)
    // fetch(defaultArticle)
    //   .then(response => {
    //     return response.text()
    //   })
    //   .then(text => {
    //     this.setState({
    //       text: text
    //     }, () => {
    //       console.log(this.state)
    //     })
    //   })
    
  }

  // public scrollToTop() {

  // }

  render() {
    let date = this.props.article ? new Date(this.props.article.date) : new Date();

    return (
      <div className="container">
        {this.props.article ?

          <article className="article">
            <div className="head">
              <h1>{this.props.article.title}</h1>
              <div className="Info">
                <div className="Date">{date.getFullYear()} / {date.getMonth()} / {date.getDate()}  {date.getUTCHours()}:{date.getUTCMinutes()}</div>
                |
            <div className="Author">{this.props.article.author}</div>
              </div>
              <hr />
            </div>
            <ReactMarkdown source={this.props.article.body}
              escapeHtml={false}
              transformImageUri={(url) => {
                console.log(url);
                return process.env.REACT_APP_IMG_SERVER + url;
              }}
            />
          </article>

          : <article className="article">
            Loading
    </article>}
      </div>);
  }

}

export default Article;
