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
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <a href="https://angierodriguez.dev" target="_blank">
          <img src={profilePic} className="logo" alt="Profile Pic" />
        </a>
      </div> */}
      <a href="https://angierodriguez.dev" target="_blank">
        <img src={profilePic} className="logo" alt="Profile Pic" />
      </a>
      <main className="section__main">
        <h1>Angie Rodriguez</h1>
        <p className="profession">Frontend Developer</p>
        <small><a href="https://www.angierodriguez.dev/" target="_blank">angierodriguez.dev</a></small>
        <div className="button-container">
          <button className="button"><IconMailHeart /><span>Email</span></button>
          <button className="button button--linkedin"><IconBrandLinkedin /><span>LinkedIn</span></button>
        </div>
        <section className="section-copy">
          <h2>About</h2>
          <p>
            I am a front end software developer who enjoys bringing to life simple and elegant designs with attention to coding quality and engineering best practices. I learn developer tools and technologies through documentation and experimentation while furthering my knowledge in computer science and engineering concepts.
          </p>
        </section>
        <section className="section-copy">
          <h2>Interests</h2>
          <p>
            Coffee fan. Cat/pet person. Video game music junkie. Flute player. Binge reader. Dark comedy & surreal humor enthusiast. Aspiring polyglot.
          </p>
        </section>
      </main>
      <footer className="section__footer">
        <ul className="footer-nav">
          <li>
            <a href="mailto:angrodri902@gmail.com" target="_blank">
              <IconMailHeart size={25} />
            </a>
          </li>
          <li>
            <a href="https://www.angierodriguez.dev/" target="_blank">
              <IconWorldWww size={25}/>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/angierodriguezdev/"
              target="_blank"
            >
              <IconBrandLinkedin size={25}/>
            </a>
          </li>
          <li>
            <a
              href="https://www.upwork.com/freelancers/~01d0a3ae04d08794ae?viewMode=1"
              target="_blank"
            >
              <IconBrandUpwork size={25}/>
            </a>
          </li>
          <li>
            <a href="https://github.com/ARodriguezHacks" target="_blank">
              <IconBrandGithub size={25}/>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
