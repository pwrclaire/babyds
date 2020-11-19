import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Hours of Operation</h2>
      <ul className="info">
        <li>Monday: 10-10</li>
        <li>Tuesday: 10-10</li>
        <li>Wednesday: 10-10</li>
        <li>Thursday: 10-10</li>
        <li>Friday: 10-10</li>
        <li>Saturday: 10-10</li>
      </ul>
    </section>
    <section>
      <h2>Information</h2>
      <dl className="alt">
        <dt>Address</dt>
        <dd>#11-29 W. Broadway &bull; Vancouver &bull; 1P1</dd>
        <dt>Phone</dt>
        <dd>(778) 000-0000</dd>
        <dt>Email</dt>
        <dd>
          <a href="https://codebushi.com">information@untitled.tld</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/huntaroSan"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-instagram alt">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/codebushi/gatsby-starter-stellar"
            className="icon fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.
    </p>
  </footer>
)

export default Footer
