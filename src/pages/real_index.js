import { Link } from 'gatsby'
import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import dog from '../assets/images/dog.jpg'
import grooming from '../assets/images/grooming.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import Carousel from '../components/Carousel'
import Pricing from '../components/Pricing'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Index = () => {
  const [stickyNav, setStickyNav] = useState(false)
  const [showPrice, setShowPrice] = useState(false)

  const handlePriceClick = e => {
    showPrice ? setShowPrice(false) : setShowPrice(true)
  }

  return (
    <Layout>
      <Helmet title="Gatsby Starter - Stellar" />
      <Header />
      <Waypoint
        onEnter={() => setStickyNav(false)}
        onLeave={() => setStickyNav(true)}
      ></Waypoint>
      <Nav sticky={stickyNav} />

      <div id="main">
        <section id="intro" className="main">
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
              <img src={pic01} alt="" />
            </span>
          </div>
        </section>

        <section id="daycare" className="main">
          <div className="spotlight">
            <div className="content">
              <header className="major">
                <h2>Day Care</h2>
                <h3>How is the day being spent in Baby D’s Home?</h3>
              </header>

              <h3>Morning</h3>
              <p>
                When our furry friends arrive, we realize that they may have
                been too excited to do all their “business”. Soooo…out we go for
                our first walk of the day. If it’s wet (really, Vancouver!) paws
                and bellies get toweled off. Once that’s done, the dogs see
                which of their friends have gotten there before them. The
                running, the chasing, the playing that ensues; and we try to
                capture all this in photos and little videos that we share on
                Instagram throughout the day. The first 2-3 hours at Baby D’s
                home are busy with these activities, and of course your babies
                are rewarded with little training treats for being so well
                behaved.
              </p>
              <h3>Afternoon</h3>
              <p>
                Then around noon, lunch is served (in private) for those of our
                friends that brought a “lunch box”. Once their bellies are full,
                they go for another walk and often opt for a nap once they get
                back. All that playing can be exhausting, don’t you know? Also,
                some pups come for a half day around this time, so there’s more
                friends to greet and sniff.
                <br />
                The afternoon is often lower key than the morning, but that
                doesn’t mean that it’s any less fun. More walks and more playing
                continue until it’s time to get picked up, so be prepared for
                your furry companion to be tuckered out when you get home.
              </p>
            </div>
          </div>
          <h2>Daycare In take Process: </h2>
          <p>
            To ensure a safe and enjoyable environment, our daycare caters to
            dogs up to 25 lbs. All dogs must have their 3rd set of shots and be
            spayed or neutered (by 7 months of age) Book your free orientation
            and 3 hour trial for your fur baby (Available on Mondays, Fridays
            and Saturdays). This allows you to tour the facility and your pup to
            play and explore.
          </p>
          <h3>Regular Pricing for Daycare (valid for 6 months)</h3>
          <button onClick={() => handlePriceClick()}>
            <a className="icon fa-expand">
              {' '}
              {showPrice ? 'Hide Pricing' : 'Show Pricing'}
            </a>
          </button>
          {showPrice ? <Pricing /> : ''}
          <footer className="footer">
            <h3>Why choose us:</h3>
            <ul>
              <li>
                Your dogs are always our top priority. All of your babies will
                be taken care of by our detail oriented specialists.
              </li>
              <li>
                In order to maintain our service quality, we keep a low ratio of
                dogs to staff. (Max. 10 dogs per pet specialist)
              </li>
              <li>
                We go for walks 2 to 5 times a day. (maximum of three dogs at a
                time)
              </li>
            </ul>
          </footer>
        </section>

        <section id="grooming" className="main">
          <div className="spotlight">
            <div className="content">
              <header className="major">
                <h2>Grooming</h2>
              </header>
              <p>
                Established in 2018, Baby D's has been making a difference in
                the community since.
              </p>
            </div>
            <span className="image">
              <img src={grooming} alt="" />
            </span>
          </div>
        </section>

        <section id="training" className="main special">
          <header className="major">
            <h2>Training</h2>
          </header>
        </section>

        <section id="review" className="main special">
          <header className="major">
            <h2>We've got people taking</h2>
            <Carousel />
          </header>
        </section>
      </div>
    </Layout>
  )
}

export default Index