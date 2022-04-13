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
import { Carousel } from 'react-responsive-carousel'
import InstaFeed from '../components/Insta/InstaFeed'
import DayCarePricing from '../components/DayCarePricing'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import SEO from '../components/seo'
import GroomingPricing from '../components/GroomingPricing'
import logo from '../assets/images/logo.png'


// image imports
import img1 from '../assets/images/daycare/daycare1.jpeg'
import img2 from '../assets/images/daycare/daycare2.jpeg'
import img3 from '../assets/images/daycare/daycare3.jpeg'
import img4 from '../assets/images/daycare/daycare4.jpeg'
import img5 from '../assets/images/daycare/daycare5.jpeg'
import img6 from '../assets/images/daycare/daycare6.jpeg'
import img7 from '../assets/images/daycare/daycare7.jpeg'
import img8 from '../assets/images/daycare/daycare8.jpeg'
import img9 from '../assets/images/daycare/daycare9.jpeg'
import img10 from '../assets/images/daycare/daycare10.jpeg'
import img11 from '../assets/images/daycare/daycare11.jpeg'
import img12 from '../assets/images/daycare/daycare12.jpeg'
import img13 from '../assets/images/daycare/daycare13.jpeg'
import img14 from '../assets/images/daycare/daycare14.jpeg'
import img15 from '../assets/images/daycare/daycare15.jpeg'

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
      <SEO
        title="Baby D's Home - Doggy Daycare & Grooming"
        description="Doggy Daycare & Grooming in Vancouver, BC"
        image={didi}
      />
      <Header />
      <Nav sticky={stickyNav} />
      <Waypoint
        onEnter={() => setStickyNav(false)}
        onLeave={() => setStickyNav(true)}
      ></Waypoint>

      <div id="main">
        <section id="intro" className="main special">
          <div className="spotlight">
            <div className="content">
              <header className="major">
                <h2>Welcome Home</h2>
                <h3>A new place for our furry babies</h3>
              </header>
              <p>
                Baby D's Home is a daycare and Spa for our furry babies. Our
                goal is to create a comfortable environment for our furry babies
                to hang out and socialize with new friends.
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
              <h2>Daycare In take Process</h2>
              <p>
                All dogs must have their 3rd set of shots and be spayed or
                neutered (by 7 months of age). We offer a 3 hour trial ($15) to
                access and see if your baby likes our facility and how he/she
                gets along with the existing members and staffs. Once he/she
                passes and decides to come back, the $15 trial fee will be
                discounted when purchasing the first daycare package. Trials are
                available on Mondays, Fridays and Saturdays. Please call our
                Daycare team at 604-829-3521 to book!
              </p>
              <h2>A Dogs Day in Daycare</h2>
              <p>
                We are located in Central Vancouver and a have a wonderful 1700
                sqft daycare space waiting for your Dog! This includes a large
                exercise area with rubber flooring for intense running and
                playing. Also 2 separate enclosures that are filled with dog
                beds and couches for your pet to feel like at home.
              </p>
              <h2>A typical day in our care</h2>
              <div>
                <strong>7am to 10am:</strong> We will start the day making sure your dog will
                burn off all energy reserves from the long night sleep. they
                would play fetching, tug and war and plenty of toys to play with
                their friends.
                <br />
                <strong>10am to 12pm:</strong> We will start our first neighborhood walks to the
                parks and ensure each dog has time to sniff the grass and go to
                the washroom (because most of them like it better on grass)
                <br />
                <strong>12pm to 1pm:</strong> If your dog requires lunch, please make sure you
                provide their food with their own containers and their names on
                it. Your dog will be fed individually in a separated area to
                ensure that every dog will enjoy their lunch in privacy. 
                <br />
                <strong>1pm to 3pm:</strong> We will start our second neighborhood walks and let
                your dog enjoy the nature again. 
                <br />
                <strong>3pm to 5pm:</strong> Fun time with games, basic training and nap times. 
                <br />
                <strong>5pm to 6:30pm:</strong> Play time again if they still have energy or our
                favorite cuddle time waiting for parents to pick up. 
                <br />
                <i>Please make sure your dog has gone to the washroom prior to
                drop off as they may not be going out right away upon drop off
                for a bathroom break</i>
                <ul>
                  <li>We have a 1 to 10 staff ratio to dogs which is the best in town!</li>
                  <li>We stay warm in the winter and cool in the summer</li>
                  <li>We accept all sizes breeds</li>
                  <li>We conduct an assessment on all new dogs before daycare approval to make sure all dogs are safe</li>
                  <li>We do multiples walks a day (1 dog per time) </li>
                  <li>We feed lunch in a safe separated area, 1 by 1 </li>
                  <li>Private home boarding (Maximum two dogs at a time)</li>
                </ul>
              </div>
              <Carousel width={screenSize.width <= 980 ? '100%' : '30%'} thumbWidth={30} infiniteLoop autoPlay>
                <img src={img1} alt="Doggy Dayare & grooming" />
                <img src={img2} alt="Doggy Dayare & grooming" />
                <img src={img3} alt="Doggy Dayare & grooming" />
                <img src={img4} alt="Doggy Dayare & grooming" />
                <img src={img5} alt="Doggy Dayare & grooming" />
                <img src={img6} alt="Doggy Dayare & grooming" />
                <img src={img7} alt="Doggy Dayare & grooming" />
                <img src={img8} alt="Doggy Dayare & grooming" />
                <img src={img9} alt="Doggy Dayare & grooming" />
                <img src={img10} alt="Doggy Dayare & grooming" />
                <img src={img11} alt="Doggy Dayare & grooming" />
                <img src={img12} alt="Doggy Dayare & grooming" />
                <img src={img13} alt="Doggy Dayare & grooming" />
                <img src={img14} alt="Doggy Dayare & grooming" />
                <img src={img15} alt="Doggy Dayare & grooming" />
              </Carousel>
            </div>
          </div>

              <h2>Pricing</h2>
              <DayCarePricing />
              <br />
              <h2>Looking for Boarding?</h2>
              <p>Call us to find out more!</p>
        </section>

        <section id="grooming" className="main">
          <div className="spotlight">
            <header className="major" style={{ marginBottom: 0 }}>
              <h2>Grooming and Pricing</h2>
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
          <h2>Pricing</h2>
          At the Baby D’s our aim is to make your pet’s visit as pleasant and
          stress free as possible. Our professional groomer will take every
          precaution possible and provide gentle, loving care of your pet.
          <br />
          <br />
          <GroomingPricing />
          <br />
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

