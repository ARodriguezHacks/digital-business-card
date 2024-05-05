import { IconBrandLinkedin, IconMailHeart } from '@tabler/icons-react';
import profilePic from '../../assets/profile.png'
import './style.css'

function Info() {
  return (
    <header className="header">
      <a href="https://angierodriguez.dev" target="_blank">
        <img src={profilePic} className="profile" alt="Profile Pic" />
      </a>
      <h1>Angie Rodriguez</h1>
      <p className="profession">Frontend Developer</p>
      <small>
        <a
          href="https://www.angierodriguez.dev/"
          target="_blank"
          className="dynamic-link"
        >
          angierodriguez.dev
        </a>
      </small>
      <div className="button-container">
        <a
          href="mailto:angrodri902@gmail.com"
          className="button dynamic-button"
        >
          <IconMailHeart />
          <span>Email</span>
        </a>
        <a
          href="https://www.linkedin.com/in/angierodriguezdev/"
          target="_blank"
          className="button button--linkedin dynamic-button"
        >
          <IconBrandLinkedin />
          <span>LinkedIn</span>
        </a>
      </div>
    </header>
  );
}

export default Info;
