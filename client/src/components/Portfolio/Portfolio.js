import React from 'react';
import ProjectCover from './ProjectCover';
import "./Portfolio.css";

class Portfolio extends React.Component {
  render() {
    return <div className="PortfolioContainer">
      <ProjectCover></ProjectCover>
      <ProjectCover></ProjectCover>
      <ProjectCover></ProjectCover>
      <ProjectCover></ProjectCover>
      <ProjectCover></ProjectCover>
      <ProjectCover></ProjectCover>
      <ProjectCover></ProjectCover>
      <ProjectCover></ProjectCover>
      <ProjectCover></ProjectCover>
      <div className="EndIndicatorWrapper">
        <div className="VerticalLine"></div>
        <div className="EndIndicator">End</div>
        <div className="VerticalLine"></div>

      </div>
    </div>
  }
}

export default Portfolio;