import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { LinkedIn, GitHub } from '../../../assets/SocialIcons'

export default function AboutBox(props) {
  const { theme } = props;
  return(
    <div className="about-box__container">
      <div className={`about-box${theme}`}>
        <h2 className="about-box__aniamted-h2">Farah Zaqout</h2>
        <p className="about-box__animated-p">
          Creating elegant, robust &amp; responsive web applications.
        </p>
        <Router>
          <Link className={`about-box__button${theme}`} to="/x">ABOUT ME</Link>
        </Router>
      </div>
      <div className={`social-links${theme} social-links--animated`}>
        <Router>
          <Link title="LinkedIn" to="/s"><LinkedIn className={`social-links__icon${theme}`} /></Link>
          <Link title="GitHub" to="/s"><GitHub className={`social-links__icon${theme}`} /></Link>
        </Router>
      </div>
    </div>
  )
}
