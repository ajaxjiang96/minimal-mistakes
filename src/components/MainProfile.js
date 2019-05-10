import React from 'react';
import myphoto from '../assets/images/site/Jiacheng-Jiang-2.jpeg';
import './MainProfile.css';

function MainProfile() {
  return (
    <div className="MainProfile">
      <div className="ProfilePhotoContainer">
        <img src={myphoto} className="ProfilePhoto" alt="logo" />
      </div>
      <div className="Info">
        <div className="Name">AJAX (JIACHENG) JIANG</div>
        <div className="Location">
          <i class={"fas fa-map-marker-alt"}></i> Suzhou, China / Toronto, Canada
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
      
    </div>
  );
}

function SocialLink(title, logo, url) {
  return<a href={url} className="SocialLink" target="_blank" rel="noopener noreferrer">
      {/* {title} */}
      <i class={logo}></i>
    </a>
}

export default MainProfile;
