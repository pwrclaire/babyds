import { Link } from 'gatsby'
import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import didi from '../assets/images/didi.png'
import yoshiko from '../assets/images/yoshiko.png'
import kaori from '../assets/images/kaori.jpg'
import saki from '../assets/images/saki.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import Carousel from '../components/Carousel'
import InstaFeed from '../components/Insta/InstaFeed'
import Pricing from '../components/Pricing'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
const Index = () => {
  const [stickyNav, setStickyNav] = useState(false)

  const [hasRan, setHasRan] = useState(false)
  const [screenSize, setScreenSize] = useState({
    height: 0,
    width: 0,
  })
  const updateScreenSize = () => {
    setScreenSize({ width: window.innerWidth, height: window.innerHeight })
  }
  useEffect(() => {
    if (!hasRan) {
      setHasRan(true)
      updateScreenSize()
    }
    window.addEventListener('resize', updateScreenSize)
    return () => {
      window.removeEventListener('resize', updateScreenSize)
    }
  }, [screenSize])

  return (
    <Layout>
      <Helmet title="Baby D's Home - Doggy Daycare & Grooming">
        <script type="application/ld+json">
          {`
            {
              "@context": "https://babydshome.ca/",
              "@type": "Organization",
              "url": "https://babydshome.ca/",
              "name": "Baby D's Home - Doggy Daycare & Doggy Grooming",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "604-829-3521",
                "contactType": "General Inquiry"
              }
            }
          `}
        </script>
      </Helmet>
      <Header />
      <Waypoint
        onEnter={() => setStickyNav(false)}
        onLeave={() => setStickyNav(true)}
      ></Waypoint>
      <Nav sticky={stickyNav} />

      <div id="main">
        <section id="intro" className="main special">
          <div className="spotlight">
            <div className="content">
              <header className="major">
                <h2>Welcome Home</h2>
                <h3>A new place for our furry babies</h3>
              </header>
              <p>
                Baby D’s Home is a new dog daycare on Broadway near Main st.
                Vancouver, that’s founded by dog lovers! Our goal is to create a
                comfortable environment for our furry babies to hang out and
                socialize with new friends.
              </p>
            </div>
            <span className="image">
              <img src={didi} alt="Doggy Dayare & grooming" />
            </span>
          </div>
        </section>

        <section id="daycare" className="main">
          <div className="spotlight">
            <div className="content">
              <header className="major">
                <h2>Day Care</h2>
              </header>
              <h2>Daycare In take Process: </h2>
              <p>
                All dogs must have their 3rd set of shots and be spayed or
                neutered (by 7 months of age). Book your free orientation and 3
                hour trial for your fur baby (Available on Mondays, Fridays and
                Saturdays). This allows you to tour the facility and your pup to
                play and explore.
              </p>
              <h2>Pricing</h2>
              <Pricing />
            </div>
          </div>
        </section>

        <section id="grooming" className="main">
          <div className="spotlight">
            <header className="major" style={{ marginBottom: 0 }}>
              <h2>Grooming</h2>
            </header>
          </div>
          <div className="spotlight">
            <div className="content">
              <h3>
                <b>Yoshiko</b>
              </h3>
              <p>
                Our groomer Yoshiko is a Master Groomer with over 35 years of
                combined experience in Japan and Canada. She has graduated from
                the Japan Dog Grooming School and is a certified Master groomer
                by the N.D.G.A.A.
                <br />
                Yoshiko moved to Canada in 1987 and is fluent in Japanese and
                English. She specializes in styling small to medium dog breeds,
                with extensive experience in terrier breeds.
              </p>
            </div>
            <span className="image">
              <img src={yoshiko} alt="Doggy Dayare & grooming - Yoshiko" />
            </span>
          </div>
          <div
            className="spotlight"
            style={
              screenSize.width <= 980
                ? { flexDirection: 'column' }
                : { flexDirection: 'initial' }
            }
          >
            <span
              className="image"
              style={
                screenSize.width > 980
                  ? { marginLeft: 0, marginRight: '4em' }
                  : { marginLeft: 0, marginRight: 0 }
              }
            >
              <img src={kaori} alt="Doggy Dayare & grooming - Kaori" />
            </span>
            <div className="content">
              <h3>
                <b>Kaori</b>
              </h3>
              <p>
                Kaori has more than fifteen years of experience grooming dogs.
                She was formally trained in Japan. She has worked as a groomer
                in Japan, Hawaii, Australia, and the past ten years in
                Vancouver.
                <br />
                Her credo on grooming is to focus on the comfort and well-being
                of her furry friends. The part about her career that she enjoys
                the most is building trust and understanding with both canine
                and human clients.
                <br />
                Kaori specializes in Asian fusion cuts as well as all breeds and
                sizes.
                <br />
                She owns a sweet-natured Morkie named Brody. Kaori speaks
                Japanese and English.
              </p>
            </div>
          </div>
          <div className="spotlight">
            <div className="content">
              <h3>
                <b>Saki</b>
              </h3>
              <p>
                Saki is a junior groomer, newest member of the Baby D's home and
                certified by CPPS (Canadian professional pet stylist). She was
                born, raised in Japan and had dogs around her ever since she was
                little. Saki owns two Bichon Frise named Bongo and Koto, it was
                meant to be that they've met because they led her to become a
                groomer and now she loves what she does!
                <br />
                After graduated from grooming school 2020, she keeps learning,
                continuing educate herself hard and enjoys working with all
                breeds of dogs.
              </p>
            </div>
            <span className="image">
              <img src={saki} alt="Doggy Dayare & grooming - Kaori" />
            </span>
          </div>
        </section>

        <section id="instagram" className="main special">
          <header className="major">
            <h2>Instagram</h2>
          </header>
          <a
            href="https://www.instagram.com/babydshomevancouver"
            target="_blank"
          >
            Follow us in Instagram
          </a>
          ❤️
          <br />
          <InstaFeed token={process.env.GATSBY_INSTA_TOKEN} limit={12} />
        </section>
      </div>
    </Layout>
  )
}

export default Index
