import React from 'react';
// import logo from '../assets/images/site/favicon.ico';
import './Article.css';
import defaultArticle from '../assets/markdown/sample.md'
const ReactMarkdown = require('react-markdown')

class Article extends React.Component{

    componentWillMount() {
        this.setState({
            text: "Loading"
        })
    }
    componentDidMount() {
        console.log(defaultArticle)
        fetch(defaultArticle)
          .then(response => {
            return response.text()
          })
          .then(text => {
            this.setState({
              text: text
            }, () => {
              console.log(this.state)
            })
          })
      }
    render() {
        return (
            <div className="Article">
                <div className="Head">
                    {/* <div className="closeButton">
                        <i className="fa fa-times"/>
                    </div> */}
    
                    <h1> One Calendar</h1>
                    <div className="Info">
                        <div className="Date">2017 / 05 / 09</div>
                        |
                        <div className="Author">Jiacheng Jiang</div>
                    </div>
                    <hr/>
                </div>
                <ReactMarkdown source={this.state.text}/>
            </div>
        );
    }
    
}

export default Article;
