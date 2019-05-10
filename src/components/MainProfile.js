import React from 'react';
import myphoto from '../assets/images/site/Jiacheng-Jiang.jpg';
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
        {SocialLink("Github", "fab fa-github")}
        {SocialLink("LinkedIn", "fab fa-linkedin")}
        {SocialLink("Instagram", "fab fa-instagram")}
        {SocialLink("Email", "fas fa-envelope")}
      </div>
    </div>
  );
}

function SocialLink(title, logo, url) {
  return <div className="SocialLink">
    {/* {title} */}
    <i class={logo}></i>
  </div>
}

export default MainProfile;
