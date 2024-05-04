// import { useState } from 'react';
import profilePic from './assets/profile.png';
import './App.css';
import {
  IconBrandLinkedin,
  IconBrandUpwork,
  IconWorldWww,
  IconBrandGithub,
  IconMailHeart,
} from '@tabler/icons-react';

function App() {
  return (
    <>
      {/* <div>
        <a href="https://angierodriguez.dev" target="_blank">
          <img src={profilePic} className="logo" alt="Profile Pic" />
        </a>
      </div> */}
      <a href="https://angierodriguez.dev" target="_blank">
        <img src={profilePic} className="profile" alt="Profile Pic" />
      </a>
      <main className="section__main">
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
          <a href="mailto:angrodri902@gmail.com" className="button dynamic-button">
            <IconMailHeart />
            <span>Email</span>
          </a>
          <a href="https://www.linkedin.com/in/angierodriguezdev/" target="_blank" className="button button--linkedin dynamic-button">
            <IconBrandLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>
        <section className="section-copy">
          <h2>About</h2>
          <p>
            I am a front end software developer who enjoys bringing to life
            simple and elegant designs with attention to coding quality and
            engineering best practices. I learn developer tools and technologies
            through documentation and experimentation while furthering my
            knowledge in computer science and engineering concepts.
          </p>
        </section>
        <section className="section-copy">
          <h2>Interests</h2>
          <p>
            Coffee fan. Cat/pet person. Video game music junkie. Flute player.
            Binge reader. Dark comedy & surreal humor enthusiast. Aspiring
            polyglot.
          </p>
        </section>
      </main>
      <footer className="section__footer">
        <ul className="footer-nav">
          <li>
            <a
              href="mailto:angrodri902@gmail.com"
              className="dynamic-link"
            >
              <IconMailHeart size={25} />
            </a>
          </li>
          <li>
            <a
              href="https://www.angierodriguez.dev/"
              target="_blank"
              className="dynamic-link"
            >
              <IconWorldWww size={25} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/angierodriguezdev/"
              target="_blank"
              className="dynamic-link"
            >
              <IconBrandLinkedin size={25} />
            </a>
          </li>
          <li>
            <a
              href="https://www.upwork.com/freelancers/~01d0a3ae04d08794ae?viewMode=1"
              target="_blank"
              className="dynamic-link"
            >
              <IconBrandUpwork size={25} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ARodriguezHacks"
              target="_blank"
              className="dynamic-link"
            >
              <IconBrandGithub size={25} />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
