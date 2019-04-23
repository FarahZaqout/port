
import React, { Component, Fragment } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import AboutBox from '../components/AboutBox'
import Work from '../components/Work'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: '--dark',
      isDivHidden: false,
    }
    this.changeTheme = this.changeTheme.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => {
        return { isDivHidden: true }
      })
    }, 1900)
  }
  // SWITCH BETWEEN DARK AND LIGHT THEMES
  changeTheme() {
    const { theme } = this.state
    if (theme === '--dark') this.setState(() => {
      document.documentElement.setAttribute("data-theme", '--light');
      document.body.setAttribute("data-theme", '--light');
      return { theme: '--light' }
    })
    if (theme === '--light') this.setState(() => {
      document.documentElement.setAttribute("data-theme", '--dark');
      document.body.setAttribute("data-theme", '--dark');
      return { theme: '--dark' }
    })
  }

  render() {
    const { theme, isDivHidden } = this.state;
    return (
      <Fragment>
        <div className={`${isDivHidden ? 'cover hidden' : 'cover'}`}>
          <h2>WELCOME</h2>
        </div>
        { isDivHidden && <Fragment> 
        <div className={`app__header`}>
          <Navbar adjust={this.changeTheme} theme={theme} />
          <AboutBox theme={theme} />
        </div>
        <Work />
        </Fragment>
          }
      </Fragment>
    )
  }
}
