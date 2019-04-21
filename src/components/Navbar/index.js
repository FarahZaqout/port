import React, { Fragment } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Navbar = (props) => {
  const { adjust, theme } = props
  if (!props.adjust) console.log('the adjust button has no functionality')
  return <Router>
  <ul className={`navbar${theme} navbar--animated`}>
  <div>
    <Link to="/">About</Link>
    <Link to="/">Portfolio</Link>
    <Link to="/">Contact</Link>
    <Link title="Change the website theme" to="#"><i onClick={adjust} id="adjust-icon" className="fas fa-adjust"></i></Link>
  </div>
  </ul>
  </Router>
}

export default Navbar
