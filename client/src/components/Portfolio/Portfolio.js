import React from 'react';
import PortfolioCover from './PortfolioCover';
import "./Portfolio.css";

class Portfolio extends React.Component {

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
    return <div className="PortfolioContainer">
      <PortfolioCover title="Graphics"></PortfolioCover>
      <PortfolioCover title="UI/UX"></PortfolioCover>
      <PortfolioCover title="Photo"></PortfolioCover>
    </div>
  }
}

export default Portfolio;