import React from 'react'

// import logo from '../assets/images/logo.svg'
import logo from '../assets/images/logo.png'

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt="" />
    </span>

    <h1>Baby D's Home</h1>
    <span>
      Day care: 604-829-3521
      <br />
      Grooming: 604-652-6862
    </span>
  </header>
)

export default Header
