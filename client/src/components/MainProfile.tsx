import React from 'react';
import myphoto from '../assets/images/site/Jiacheng-Jiang-2.jpeg';
import './MainProfile.css';
import uoftLogo from "../assets/images/site/exp/uoft.png"
import utadaLogo from "../assets/images/site/exp/utada-logo.png"
function MainProfile() {
  return (
    <div className="MainProfile">
      <div className="ProfilePhotoContainer">
        <img src={myphoto} className="ProfilePhoto" alt="logo" />
      </div>
      <div className="Info">
        <div className="Name">AJAX (JIACHENG) JIANG</div>
        <div className="Location">
          <i className={"fas fa-map-marker-alt"}></i> Suzhou, China / Toronto, Canada
      </div>
        <div className="Skills">
          Full Stack Developer / Graphics Designer
        </div>
      </div>
      <div className="SocialLinks">
        {SocialLink("Github", "fab fa-github", "https://github.com/ajaxjiang96")}
        {SocialLink("LinkedIn", "fab fa-linkedin", "https://www.linkedin.com/in/jiacheng-jiang-4a720669/")}
        {SocialLink("Instagram", "fab fa-instagram", "https://www.instagram.com/b4whitby/")}
        {SocialLink("Email", "fas fa-envelope", "mailto:ajax.jiang@mail.utoronto.ca")}
      </div>

      <div className="experiences">
        <h1>Experience</h1>
        {experience("Frontend Developer", "Intact Finanacial Corporation", "https://www.intact.ca/content/intact/qc/en/boilerplate-content/header/_jcr_content/par/header/logo.img.png/1524582619038.png", "2017.5", "2018.7", "https://www.intact.ca/", "emp")}
        {experience("President", "UofT Application Development Association", utadaLogo, "2017.9", "2018.9", "http://www.uoftada.com/", "emp")}
        {experience("Vice President, Design Department", "UofT Application Development Association", utadaLogo, "2016.9", "2017.5", "http://www.uoftada.com/", "emp")}

        <h1>Education</h1>

        {experience("Bachelor's Degree, Computer Science", "University of Toronto", uoftLogo, "2014.9", "2019.6", "https://www.utoronto.ca/", "edu")}
      </div>

    </div>
  );
}

function SocialLink(title: string, logo: string, url: string) {
  return <a href={url} className="SocialLink" target="_blank" rel="noopener noreferrer">
    {/* {title} */}
    <i className={logo}></i>
  </a>
}


function experience(title: string, name: string, logo: string, from: string, to: string, link: string, type: "edu" | "emp") {
  return (
    <div className="exp-container">
      <div className="img-container"><a href={link} target="_blank"><img src={logo} alt={name} className="exp-logo" /></a></div>


      <div className="exp-detail">
        <div className="exp-title">{title}</div>
        <div className="exp-name">{name}</div>
        <div className="exp-period"><i className={logo}></i> {from} - {to ? to : "Present"}</div>
      </div>

    </div>)
}
export default MainProfile;
