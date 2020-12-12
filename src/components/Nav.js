import { Link } from 'gatsby'
import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = props => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <Scrollspy
      items={['intro', 'daycare', 'grooming', 'training', 'review']}
      currentClassName="is-active"
      offset={-300}
    >
      <li>
        <Scroll type="id" element="intro">
          <a href="#">Home</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="daycare">
          <a href="#">Day Care</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="grooming">
          <a href="#">Grooming</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="training">
          <a href="#">Training</a>
        </Scroll>
      </li>
      {/* <li>
        <Scroll type="id" element="review">
          <a href="#">Review</a>
        </Scroll>
      </li> */}
    </Scrollspy>
  </nav>
)

export default Nav
