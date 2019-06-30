import React from 'react';
import "./Portfolio.css";
import { Link } from 'react-router-dom'

class PortfolioCover extends React.Component {

  constructor(props) {
    super(props);
    this._expandItem = this._expandItem.bind(this);
  }

  componentWillMount() {
    this.setState({
      expanded: false
    })
  }
  
  _expandItem() {
    this.setState({
      expanded: true
    })
  }

  render() {
    return  <div className={`PortfolioCoverContainer ${this.state.expanded ?"Expanded" :""}`}>
      <Link to="/portfolio/item1" >
      <div className={`PortfolioCover`}>
        {/* <div className="PortfolioCover"> */}
        <div className="CoverImage" style={{ backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")", }}>
          
        </div>
        {/* <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3308470430,2883016231&fm=26&gp=0.jpg" alt="" /> */}
        <div className="PortfolioCoverBackdrop">
          <div className="Title">{this.props.title}</div>

        </div>

      </div>
      </Link>
    </div>
  }
}

export default PortfolioCover;