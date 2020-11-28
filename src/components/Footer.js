import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Hours of Operation</h2>
      <ul className="info">
        <li>Monday: 7-6:30</li>
        <li>Tuesday: 7-6:30</li>
        <li>Wednesday: 7-6:30</li>
        <li>Thursday: 7-6:30</li>
        <li>Friday: 7-6:30</li>
        <li>Saturday: 9-5</li>
        <li>Sunday: 9-5</li>
      </ul>
    </section>
    <section>
      <h2>Information</h2>
      <dl className="alt">
        <dt>Address</dt>
        <dd>#29-11 W Broadway &bull; Vancouver, B.C &bull; V6H 1E6</dd>
        <dt>Daycare</dt>
        <dd>604-829-3521</dd>
        <dt>Grooming</dt>
        <dd>604-829-3521</dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://www.instagram.com/babydshomevancouver/"
            className="icon fa-instagram alt"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; Baby D's 2020. Design: <a href="https://html5up.net">HTML5 UP</a>.
    </p>
  </footer>
)

export default Footer
