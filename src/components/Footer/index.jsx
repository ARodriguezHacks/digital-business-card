import {
  IconBrandLinkedin,
  IconBrandUpwork,
  IconWorldWww,
  IconBrandGithub,
  IconMailHeart,
} from '@tabler/icons-react';
import './style.css'

function Footer() {
  return (
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
  )
}

export default Footer